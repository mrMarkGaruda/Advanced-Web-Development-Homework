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
