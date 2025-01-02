const express = require("express");
const { handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById, 
    handlePutUserById,
    handleCreateNewUser
} = require("../controllers/user");

const router = express.Router();
exports.router = router;


 // This is for only demo purpose
 /*
 router.get("/users", async(req, res) => {
    const alldbusers = await User.find();
    const html = 
    `<ul>
    ${alldbusers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul>`;
    res.send(html);

});
*/

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)

// Routes
router.route("/:id")
.get(handleGetUserById)
.put(handlePutUserById)
.delete(handleDeleteUserById)
.patch(handleUpdateUserById)

module.exports = router;