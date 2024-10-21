const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = []; // Array to store users

app.get('/', (req, res) => {
    res.json(users);
});

app.post('/', (req, res) => {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
        return res.status(400).json({ msg: 'Missing firstName or lastName' });
    }
    const newUser = { id: users.length + 1, firstName, lastName };
    users.push(newUser);
    res.status(201).json({ msg: 'User created', user: newUser });
});

app.put('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const userIndex = users.findIndex(user => user.id == id);
    if (userIndex === -1) {
        return res.status(404).json({ msg: 'User not found' });
    }
    users[userIndex] = { id: parseInt(id), firstName, lastName };
    res.json({ msg: 'User updated', user: users[userIndex] });
});

app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id == id);
    if (userIndex === -1) {
        return res.status(404).json({ msg: 'User not found' });
    }
    users.splice(userIndex, 1);
    res.json({ msg: `Deleted resource with id: ${id}` });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
