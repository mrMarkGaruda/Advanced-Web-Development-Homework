const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    msg: 'This is the GET message'
  });
});

app.post('/', (req, res) => {
  const { firstName, lastName } = req.body;
  res.status(201).json({
    msg: 'This is the POST message',
    firstName,
    lastName
  });
});

app.put('/', (req, res) => {
  const { firstName, lastName } = req.body;
  res.json({
    msg: 'This is the PUT message',
    firstName,
    lastName
  });
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    msg: `Deleted resource with id: ${id}`
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
