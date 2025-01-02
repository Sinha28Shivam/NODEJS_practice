/** There are different way to route
 
1st way:
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.patch("/api/users/:id", (req, res) => {
    // TODO: Edit the user with id

    return res.json({ status: "Pending" });
});

app.delete("/api/users/:id", (req, res) => {
    // TODO: delete the user with id
    
    return res.json({ status: "Pending" });
});


app.post("/api/users", (req, res) => {
    // TODO: create new user with
    
    return res.json({ status: "Pending" });
});
------------------------------------------------
2nd way -> this is for same routing POST have different routing

app.route('/api/users/:id').get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.put((req, res) => {
    return res.json({ Status: "Pending" });
    })
.delete((req, res) => {
    return res.json({ Status: "Pending" });
    });




*/