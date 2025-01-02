const mongoose = require("mongoose");

// Connect to MongoDB

async function connectMOngoDb(url) {
    return mongoose
    .connect(url)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
}

module.exports = {
    connectMOngoDb
}