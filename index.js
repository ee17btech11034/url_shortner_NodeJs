const express = require("express")
const portnumber = 8000;
const mongoose = require("mongoose");

const app = express() 

//Establiosh a mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/shop-orders")
.then(()=>console.log("Mongoose is connected..."))
.catch((err)=>console.log("Error occured while connecting MongoDB"))


const userSchema = new mongoose.Schema({ //Schema for userData collection in MongoDB
    first_name:{
        type: String,
        required: true, //user need to give first_name
    },
    last_name:{
        type: String, //last_name is optional
    },
    email: {
        type: String,
        required: true,
        unique: true, //emails can not be duplicate.
    },
    gender: {
        type: String,
    },
}, {timestamps: true}) // with this timestamp we will get the time of entry. -> track 2 entries-> created and updated

//Create a Model for Schema
const userModel = mongoose.model('user', userSchema) // model name is 'user' and mongo DB create krte time ise "users" kr dega. 
// As this schema for user and collection of user will be stored on "users"

app.use(express.urlencoded({extended : false})) // inbuilt middleware that supports urlencoded data
// urlencoding is the one which is adding the details to body earlier it was empty object.


//custom middleware
app.use((req, res, next)=>{ //next represnt the next middleware in line by line execution
    req.newProperty = "Hii, i am new"
    //Can we put MongoDB connection in a middleware ut issue is everytime I will hav e to connect to Mongo. It may take time.
    next() //it will send this to next
})


app.get("/api/users", async (req, res)=>{ // path "/users" or "/" will also work as "/users" is common in all apis
    const user_data = await userModel.find({}) //get all the users
    return res.status(200).json(user_data) // send a JSOn Object
})

app.get("/users", async (req, res)=>{
    const user_data = await userModel.find({})
    const html = `
    <ul>
        <!-- ${user_data.map(user=>{`<li>${user.first_name}</li>`})} // it won't work as with { } in arrow func we need an return -->
        ${user_data.map(user=>`<li>${user.first_name} -> ${user.email}</li>`).join("")} <!-- // It automatically returns next thing written after arrow. Need to jaoin as map returns a new array -->
    </ul>
    `
    res.status(200).send(html)
})

app
  .route("/users/:id") //we can route all req with same path.
  .get(async (req, res)=>{ // /about/axx will go this page itself
    const id = req.params.id; 
    // const user_data = await userModel.find(user=>user.id === id) // Model.find no longer accepts an callback
    const user_data = await userModel.findById(id)
    const html = `
    <p> Hi ${user_data.first_name} ${user_data.last_name}, Please check the details Gender ${user_data.gender} and email ${user_data.email}
    </p>`;

    res.status(200).send(html)
  })
  .patch( async (req, res)=>{
    const id = req.params.id
    const body = req.body
    // const user_data = await userModel.find((user) => {
    //     if (user.id === id){
    //         user.first_name = body.first_name ? body.first_name : user.first_name,
    //         user.last_name = body.last_name ? body.last_name : user.last_name,
    //         user.email = body.email ? body.email : user.email,
    //         user.gender = body.gender ? body.gender : user.gender,
    //     }
    // })  // The .find() method on an array does not work with await



    /* This can be used->
    const user_data = await userModel.findById(id) //if we want to do both in same then use `findByIdAndUpdate`
    if (!user_data){
        return res.status(404).send("User does not exist!")
    }

    user_data.first_name = body.first_name ? body.first_name : user_data.first_name;
    user_data.last_name = body.last_name ? body.last_name : user_data.last_name;
    user_data.email = body.email || user_data.email;
    if (body.gender) user_data.gender = body.gender;

    // If schema uses Mixed type or nested properties, mark them
    user_data.markModified();   // Better to use findbyIdAndUpdate

    // Save updated user
    await user_data.save();

    */ 
//    const user_data = await userModel.findByIdAndUpdate(id, { //we can not do this because 
//     first_name: body.first_name || first_name, // first_name is undefined here.
//     last_name: body.last_name ? body.last_name : last_name, // mongoose preserve its values in keyword set
//     email: body.email || body.email,
//     gender: body.gender || gender,
//     })

    const user_data = await userModel.findByIdAndUpdate(id,
            { $set: body }, //set remebers the old values
            { new: true, runValidators: true } //returns the updated document. return older one if not used
            );   

    // res.status(204).send("Changes successfully updated.")
    res.status(200).json({"msg": "Changes successfully updated."})
  })
  .delete(async(req, res)=>{
    const id = req.params.id
    // const user = users.splice(id-1, 1)[0] // can not use indexing method as ids are generated by DB
    const deletedUser = await userModel.findByIdAndDelete(id);
    // findByIdAndRemove() works with middleware, but deleteOne() does not

    if (!deletedUser) {
    return res.status(404).json({ message: 'User not found' });
    }

    //if status is 204 it won't return anything bteer to use 200 and msg or only 204
    // res.status(204).send(`User ${deletedUser.first_name} ${deletedUser.last_name} with ID ${deletedUser.id} has been removed successfully.`)
    res.status(200).send(`User ${deletedUser.first_name} ${deletedUser.last_name} with ID ${deletedUser.id} has been removed successfully.`)
  })

app.post("/users/", async (req, res)=>{

    if ((!req.body) || (!req.body.first_name) ||(!req.body.email) || (!req.body.gender)){
        return res.status(400).send("All fields are required.")
    }
    const body = req.body
    // const id = users.length + 1 //id is generated by databases and we will return that 

    const new_user = await userModel.create({
        first_name: body.first_name,
        last_name: body.last_name ? body.last_name : "No Last Name",
        email: body.email,
        gender: body.gender,
    })

    return res.status(201).json(`Successfully added user. your id is: ${new_user.id}`)
})

app.listen(portnumber, ()=>{console.log(`Server started: http://localhost:${portnumber}/`)})