const express = require('express');
const usersRouter = require("./routes/users.js"); // Import the users route
const db = require("./database"); // Import your SQLite database connection
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Use the usersRouter for routes that start with /api
app.use("/api", usersRouter);

// Home GET method
app.get("/", (req, res) => {
  res.json({
    msg: "Welcome!",
  });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// // Uncomment if CORS is required
// // MIDDLEWARE
// app.use(express.json())
// // CORS
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content, Accept, Content-Type, x-api-key"
//     )
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
//     next()
// })
