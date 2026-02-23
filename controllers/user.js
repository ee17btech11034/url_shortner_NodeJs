const userModel = require("../models/user")

async function getAllUsersAsJson(req, res){
    const user_data = await userModel.find({})
    return res.status(200).json(user_data)
}

async function getAllUsersAsHtml(req, res){
    const user_data = await userModel.find({})
    const html = `
    <ul>
        <!-- ${user_data.map(user=>{`<li>${user.first_name}</li>`})} // it won't work as with { } in arrow func we need an return -->
        ${user_data.map(user=>`<li>${user.first_name} -> ${user.email}</li>`).join("")} <!-- // It automatically returns next thing written after arrow. Need to jaoin as map returns a new array -->
    </ul>
    `
    res.status(200).send(html)
}

async function getUserById(req, res){
    const user_data = await userModel.findById(req.params.id)
    const html = `
    <p> Hi ${user_data.first_name} ${user_data.last_name}, Please check the details Gender ${user_data.gender} and email ${user_data.email}
    </p>`;

    res.status(200).send(html)
}

async function updateUserbyId(req, res){
    const user_data = await userModel.findByIdAndUpdate(req.params.id,
        { $set: req.body }, 
        { new: true, runValidators: true } 
    );   

    res.status(200).json({"msg": "Changes successfully updated."})
}

async function deleteUserById(req, res){
    const deletedUser = await userModel.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).send(`User ${deletedUser.first_name} ${deletedUser.last_name} with ID ${deletedUser.id} has been removed successfully.`)
}

async function createUser(req, res){
    if ((!req.body) || (!req.body.first_name) ||(!req.body.email) || (!req.body.gender)){
        return res.status(400).send("All fields are required.")
    }
    const new_user = await userModel.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name ? req.body.last_name : "No Last Name",
        email: req.body.email,
        gender: req.body.gender,
    })

    return res.status(201).json(`Successfully added user. your id is: ${new_user.id}`)
}


module.exports = {
    getAllUsersAsJson, 
    getAllUsersAsHtml,
    getUserById,
    updateUserbyId,
    deleteUserById,
    createUser,
}