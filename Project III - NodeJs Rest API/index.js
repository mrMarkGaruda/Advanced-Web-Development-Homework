const express = require('express');
const usersRouter = require("./routes/users.js");
const db = require("./database"); // Import your SQLite database connection
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/", usersRouter);

// HOME GET METHOD
app.get("/", (req, res) => {
  res.json({
    msg: "Welcomes!",
  })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


// This down below is important for api to connect!

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