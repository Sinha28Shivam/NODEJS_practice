const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

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
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
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
    users.push({ ...body, id: users.length +1 }); // increment id by default reading from the json file

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({ Status: "Success", id: users.length });
    });


    console.log("Body", body);



    
});


app.listen(PORT, () => console.log(`Server started at: ${PORT}`));