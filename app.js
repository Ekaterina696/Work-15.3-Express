const express = require('express')
const { User } = require('./models/init');

const app = express()

app.use(express.json());

const User = require('./models/User');

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll({});
        return res.json({
            items: users,
        });
    } catch (e) {
        console.error(e);
        return res.sendStatus(400);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);

        if (!user){
            return res.sendStatus(404);
        }

        return res.json(user);

    } catch (e) {
        console.error(e);
        return res.sendStatus(400);
    }
});

app.post('/users', async (req, res) => {
    try {
        
    } catch (e) {
        console.error(e);
        return res.sendStatus(400);
    }
});

app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);

        if (!user) {
            return res.sendStatus(404);
        }

        if (req.body.name) {
            user.name = req.body.name;
        }

        if (req.body.email) {
            user.email = req.body.email;
        }

        if (req.body.password) {
            user.password = req.body.password;
        } 
       
        await user.save();

        return res.json(user);
    } catch (e) {
        console.error(e);
        return res.sendStatus(400);
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findByPk(id);

        if (!user) {
            return res.sendStatus(404);
        }
        
        await user.destroy();

        return res.sendStatus(204);
    } catch (e) {
        console.error(e);
        return res.sendStatus(400);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})