const express = require('express');

const {json} = require('express');
const connect = require('./config/database');
connect();
const userRoute = require('./router/userRoute');


const app = express();
app.use(json());
app.use('/user', userRoute);

app.get('/', (req,res) => {
    res.send('Zuri training on mongodb');
})

// const PORT = process.env.PORT || 3000;


app.listen(3000, () => {
    console.log('serving on port 3000')
})