const express = require("express")
const portnumber = 8000;
const users = require("./mock_data.json") //loaded that data
const fs = require("fs")

const app = express() 

app.use(express.urlencoded({extended : false})) // inbuilt middleware that supports urlencoded data
// urlencoding is the one which is adding the details to body earlier it was empty object.


//custom middleware
app.use((req, res, next)=>{ //next represnt the next middleware in line by line execution
    req.newProperty = "Hii, i am new"
    // res.end("Middleware 1") //it will return the response
    next() //it will send this to next
})

app.use((req, res, next)=>{ //next represnt the next middleware in line by line execution
    console.log(`newProperty in M2 from M1: ${req.newProperty}`)
    // res.end("Middleware 1") //it will return the response
    //req.ip return the user's ip
    next() //it will send this to next which is app
})

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

app
  .route("/users/:id") //we can route all req with same path.
  .get((req, res)=>{ // /about/axx will go this page itself
    const id = Number(req.params.id); //bcz id is string
    const user = users.find(user => user.id === id)
    const html = `
    <p> Hi ${user.first_name} ${user.last_name}, Please check the details Gender ${user.gender} and email ${user.email}
    </p>`;

    res.status(200).send(html)
  })
  .patch((req, res)=>{
    const id = Number(req.params.id)
    users[id-1].last_name = req.body.last_name; //is not working
    fs.writeFile("./mock_data.json", JSON.stringify(users), (err, result)=>console.log("Data patched successful"))
    res.send("Changed detals.")
  })
  .delete((req, res)=>{
    const id = Number(req.params.id)
    const user = users.splice(id-1, 1)[0] 
    fs.writeFile("./mock_data.json", JSON.stringify(users), (err, result)=>console.log("Data deleted successful"))
    res.send(`User ${user.first_name} ${user.last_name} with ID ${user.id} has been removed successfully.`)
  })

app.post("/users/", (req, res)=>{

    if ((!req.body) || (!req.body.first_name) || (!req.body.last_name) ||(!req.body.email) || (!req.body.gender)){
        return res.status(400).send("All fields are required.")
    }
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

    return res.status(201).json(`Successfully added user. your id is: ${id}`)
})

app.listen(portnumber, ()=>{console.log(`Server started: http://localhost:${portnumber}/`)})