// Import necessary modules
const db = require('../db') // Assuming you have a db.js or equivalent that sets up SQLite3

// GET all users from the database
exports.getAllUsers = function (req, res) {
	db.all("SELECT * FROM users", [], (err, rows) => {
		if (err) {
			// Handle error and return response
			res.status(500).json({ error: err.message });
		} else {
			// Append new property to each user
			const updatedRows = rows.map((user) => ({
				...user,
				// Example options for dynamic profile images
				// profileImg: `https://api.multiavatar.com/${user.firstName}.svg`, // dynamic avatar
				// profileImg: `https://robohash.org/${user.firstName}.png`, // dynamic robot avatar
				profileImg: `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`, // avatar based on initials
			}));
			
			// Send the updated user list with profile images
			res.json(updatedRows);
		}
	});
};

// GET a single user by ID
exports.getUserById = function (req, res) {
	const userId = req.params.id;

	db.get("SELECT * FROM users WHERE id = ?", [userId], (err, row) => {
		if (err) {
			// Handle error and return response
			res.status(500).json({ error: err.message });
		} else if (!row) {
			// If no user found with the given ID
			res.status(404).json({ error: "User not found" });
		} else {
			// Append profile image
			const updatedUser = {
				...row,
				profileImg: `https://ui-avatars.com/api/?name=${row.firstName}+${row.lastName}`, // avatar based on initials
			};
			
			// Send the user data with the profile image
			res.json(updatedUser);
		}
	});
};

// POST a new user
exports.createUser = function (req, res) {
	const { firstName, lastName, email } = req.body;

	db.run(
		"INSERT INTO users (firstName, lastName, email) VALUES (?, ?, ?)",
		[firstName, lastName, email],
		function (err) {
			if (err) {
				// Handle error and return response
				res.status(500).json({ error: err.message });
			} else {
				// Send the newly created user with ID
				res.status(201).json({
					id: this.lastID,
					firstName,
					lastName,
					email,
					profileImg: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`, // avatar based on initials
				});
			}
		}
	);
};

// PUT (update) an existing user by ID
exports.updateUser = function (req, res) {
	const userId = req.params.id;
	const { firstName, lastName, email } = req.body;

	db.run(
		"UPDATE users SET firstName = ?, lastName = ?, email = ? WHERE id = ?",
		[firstName, lastName, email, userId],
		function (err) {
			if (err) {
				// Handle error and return response
				res.status(500).json({ error: err.message });
			} else if (this.changes === 0) {
				// If no user was updated
				res.status(404).json({ error: "User not found or no changes made" });
			} else {
				// Send the updated user details
				res.json({
					id: userId,
					firstName,
					lastName,
					email,
					profileImg: `https://ui-avatars.com/api/?name=${firstName}+${lastName}`, // avatar based on initials
				});
			}
		}
	);
};

// DELETE a user by ID
exports.deleteUser = function (req, res) {
	const userId = req.params.id;

	db.run("DELETE FROM users WHERE id = ?", [userId], function (err) {
		if (err) {
			// Handle error and return response
			res.status(500).json({ error: err.message });
		} else if (this.changes === 0) {
			// If no user was deleted
			res.status(404).json({ error: "User not found" });
		} else {
			// Send success response
			res.json({ message: "User deleted successfully" });
		}
	});
};
