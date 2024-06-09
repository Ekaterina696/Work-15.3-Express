const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
    return res.json[{
        items: users,
        meta: {},
    }];
});

app.get('/users/:id(\\d+)', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((item) => item.id === id);
    if (user) {
        return res.json(user);
    } else {
        return res.sendStatus(404);
    }
});

app.post('/users', (req, res) => {
users.push(req.body);
return res.status(201).json(req.body);
});

app.patch('/users/:id(\\d+)', (req, res) => {
    const id = parseInt(req.params.id);
    const user_index = users.findIndex((item) => item.id === id);

    if (user_index === -1) {
        return res.sendStatus(404);
    }

    users[user_index] = req.body;
    return res.json(users[user_index]);
});

app.delete('/users/:id(\\d+)', (req, res) => {
    const id = parseInt(req.params.id);
    const user_index = users.findIndex((item) => item.id === id);

    if (user_index === -1) {
        return res.sendStatus(404);
    }

    users.splice(user_index, 1);

    return res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})