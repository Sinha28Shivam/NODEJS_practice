const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const mongoose = require("mongoose");   

const app = express();
const PORT = 3000;

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));


 // This is for only demo purpose
 app.get("/users", (req, res) => {
    const html = 
    `<ul>
    ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html);

});




// Routes
app.route("/api/users/:id")
.get((req, res) => {
    res.setHeader("X-MyName", "Shivam Sinha");  // Custom Header Always Append x in custom header
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if(!user) return res.status(404).json({ Msg: "User Not Found" });
    return res.json(user);
})
.put((req, res) => {
    return res.json(user);
})
.delete((req, res) => {
    
    return res.json(user)
});


app.post("/api/users", (req, res) => {
    const body = req.body;

    if(!body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title){
        return res.status(400).json({ Msg: "All field are required" });
    }

    users.push({ ...body, id: users.length +1 }); // increment id by default reading from the json file
    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.status(201).json({ Status: "Success", id: users.length });
    });


    console.log("Body", body);



    
});


app.listen(PORT, () => console.log(`Server started at: ${PORT}`));