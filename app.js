const express = require('express');
require('dotenv').config() 

require('./models/db');

const User = require('./models/user');

const app = express();

app.post('/signup', async (req, res) => {
    const user = await User({
        fullname: 'Jhon Doe',
        email: 'john@email.com',
        password: '1234',
    });
    await user.save();
    res.json(user);
});

app.get('/',(req,res) => {
    res.send('<h1 style="color: blue;">hello world</h1>')
});

app.listen(8000, () => {
    console.log('port is listening');
});

// //mongodb+srv://SivaniMounika:<password>@atlascluster.gpbxwae.mongodb.net/?retryWrites=true&w=majority/ 




