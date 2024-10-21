const express = require("express");
const router = express.Router();
const db = require("../database"); // Import the SQLite database connection

// GET all users
router.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ msg: "Internal Server Error" });
        }
        res.json(rows);
    });
});

// POST a new user
router.post("/users", (req, res) => {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
        return res.status(400).json({ msg: 'Missing firstName or lastName' });
    }
    db.run("INSERT INTO users (firstName, lastName) VALUES (?, ?)", [firstName, lastName], function (err) {
        if (err) {
            return res.status(500).json({ msg: "Internal Server Error" });
        }
        const newUser = { id: this.lastID, firstName, lastName }; // Get the ID of the inserted row
        res.status(201).json({ msg: 'User created', user: newUser });
    });
});

// PUT update a user
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    db.get("SELECT * FROM users WHERE id = ?", [id], (err, user) => {
        if (err || !user) {
            return res.status(404).json({ msg: 'User not found' });
        }
        db.run("UPDATE users SET firstName = ?, lastName = ? WHERE id = ?", [firstName, lastName, id], function (err) {
            if (err) {
                return res.status(500).json({ msg: "Internal Server Error" });
            }
            res.json({ msg: 'User updated', user: { id: parseInt(id), firstName, lastName } });
        });
    });
});

// DELETE a user
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM users WHERE id = ?", [id], function (err) {
        if (err || this.changes === 0) {
            return res.status(404).json({ msg: 'User not found' });
        }
        res.json({ msg: `Deleted resource with id: ${id}` });
    });
});

module.exports = router;
