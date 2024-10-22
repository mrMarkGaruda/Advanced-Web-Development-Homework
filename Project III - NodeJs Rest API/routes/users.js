const express = require("express");
const router = express.Router();
const { 
    checkApiKey 
} = require("../middleware/checkApiKey");
const { 
    getAllUsers, 
    getUserById, 
    createUser, 
    updateUser, 
    deleteUser 
} = require("../controllers/usersControllers");

// Check if any of these imports are undefined
console.log({ getAllUsers, getUserById, createUser, updateUser, deleteUser });

// GET all users
router.get("/users", checkApiKey, getAllUsers);

// GET a user by ID
router.get("/users/:id", checkApiKey, getUserById);

// POST a new user
router.post("/users", checkApiKey, createUser);

// PUT update a user
router.put("/users/:id", checkApiKey, updateUser);

// DELETE a user
router.delete("/users/:id", checkApiKey, deleteUser);

module.exports = router;
