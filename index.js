const express = require("express")
const portnumber = 8000;
const users = require("./mock_data.json") //loaded that data
const fs = require("fs")

const app = express() 

app.use(express.urlencoded({extended : false})) // It is a middleware to tell we support urlencoded data

app.get("/api/users", (req, res)=>{ // path "/users" or "/" will also work as "/users" is common in all apis
    // return res.status(200).send("Home Page"); // we can send status of that response as well
    return res.json(users) // send a JSOn Object
})

app.get("/users", (req, res)=>{
    const html = `
    <ul>
        <!-- ${users.map(user=>{`<li>${user.first_name}</li>`})} // it won't work as with { } in arrow func we need an return -->
        ${users.map(user=>`<li>${user.first_name}</li>`).join("")} <!-- // It automatically returns next thing written after arrow. Need to jaoin as map returns a new array -->
    </ul>
    `
    res.send(html)
})

app.get("/users/:id", (req, res)=>{ // /about/axx will go this page itself
    const id = Number(req.params.id); //bcz id is string
    const user = users.find(user => user.id === id)
    const html = `
    <p> Hi ${user.first_name} ${user.last_name}, Please check the details Gender ${user.gender} and email ${user.email}
    </p>`;

    res.send(html)
})

app.post("/users/", (req, res)=>{
    // console.log(req.body) // it will show undefined as we did not tell we support form data used middleware `app.use(express.urlencoded({extended : false}))`
    const body = req.body
    const id = users.length + 1
    const user = {
        "id": id,
        "first_name": body.first_name,
        "last_name": body.last_name,
        "email": body.email,
        "gender": body.gender,
    }
    users.push(user) //It will only update the user variable data. Not update JSOn file.
    fs.writeFile("./mock_data.json", JSON.stringify(users), (err, result)=>console.log("Data append successful"))

    // res.send("Successfully added the user")
    return res.json(`Successfully added user. your id is: ${id}`)
})

app.patch("/users/:id", (req, res)=>{
    const id = Number(req.params.id)
    users[id-1].last_name = req.body.last_name; //is not working
    // const updatedUsers = users.map(user => user.id === id ? {...user, last_name:req.body.last_name} : user) //destructuring -> we can use it on above methods as well
    // users.push(updatedUsers) //we can not use this as push add more data won't updated previous one

    // const user = users.find(user => user.id === id) // then use if statement to update this
    fs.writeFile("./mock_data.json", JSON.stringify(users), (err, result)=>console.log("Data patched successful"))
    res.send("Changed detals.")
})

app.delete("/users/:userId", (req, res)=>{
    const id = Number(req.params.userId)
    const user = users.splice(id-1, 1)[0] //0th index as it return array of obj // we can use .filter to return new arr without this id entry
    // const updated = data.filter(item => item.id !== 1); //can modify this 
    fs.writeFile("./mock_data.json", JSON.stringify(users), (err, result)=>console.log("Data deleted successful"))
    res.send(`User ${user.first_name} ${user.last_name} with ID ${user.id} has been removed successfully.`)
})

app.listen(portnumber, ()=>{console.log(`Server started: http://localhost:${portnumber}/`)})