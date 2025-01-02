const User = require("../models/user");
const { router } = require("../routes/user");

async function handleGetAllUsers(req, res) {
    const alldbusers = await User.find();
    return res.json(alldbusers);
}

// GET Method
async function handleGetUserById(req, res){
    // res.setHeader("X-MyName", "Shivam Sinha");  // Custom Header Always Append x in custom header
   const user = await User.findById(req.params.id);
   if(!user) return res.status(404).json({ Msg: "User Not Found" });
   return res.json(user);
}

// PATCH Method
async function handleUpdateUserById(req, res){
    const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json({ Msg: "User Updated", user: result });
}

// DELETE Method
async function handleDeleteUserById(req, res){
    const result = await User.findByIdAndDelete(req.params.id);    
    return res.json({ Msg: "User Deleted", user: result });
}

// PUT Method
async function handlePutUserById(req, res){
    const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    return res.json(user);
}

async function handleCreateNewUser(req, res) {
    const body = req.body;

    if(!body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title){
        return res.status(400).json({ Msg: "All field are required" });
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    });
    // console.log("Body", body);
    console.log("Result", result);
    return res.status(201).json({ Msg: "User Created", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handlePutUserById,
    handleCreateNewUser

}