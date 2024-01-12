const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true,}).then(() =>{
    console.log('our database is connected')
}).catch(err => console.log(err.message));
