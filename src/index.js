const express = require('express');

// // const {json} = require('express');
// const connect = require('./config/database');
// connect();
// // const userRoute = require('./router/userRoute');


const app = express();
app.use(express.json());
// // app.use(json());
// // app.use('/user', userRoute);

// app.get('/', (req,res) => {
//     res.send('Zuri training on mongodb');
// })

// const PORT = process.env.PORT || 3000;

const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');
// const { connected } = require('process');

const url = "mongodb://0.0.0.0:27017";
// const client = new MongoClient(url);



const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});






app.get('/Todo', (req,res) => {

    client.connect((err, connectedClient )=>{

        if (err) return res.status(500).json({message: err});
        const db = connectedClient.db("Newtodo");
        db.collection("Todo").find({}).toArray((err, result) =>{

            if (err) {
                return res.status(500).json({message: err})
            }
          return res.status(200).json({Todo: result})
        });
      })
})









// creating and updating new Todo task

app.post('/Todo', (req,res) => {

    client.connect((err, connectedClient )=>{

        if (err) {return res.status(500).json({message: err}) }


        const db = connectedClient.db("Newtodo");
        db.collection("Todo").insertOne(
            {
                
                title: req.body.title,
                description: req.body.description,
                timestamps: req.body.timestamps

            }, (err, result) => {
                if (err) return res.status(500).json({message: err}) 
                return res.status(200).json({message: "A new todo has been added"})
            }
        );
      })
})



// Deleting Todo task

app.delete('/Todo', (req,res) => {

    client.connect((err, connectedClient )=>{

        if (err) {return res.status(500).json({message: err}) }


        const db = connectedClient.db("Newtodo");
        const myquery = { title: null };
        db.collection("Todo").deleteOne(myquery, function(err, obj) {
            if (err) throw err;
            return res.status(200).json({message: "A todo has been deleted"});
          
          });
        });
})







app.listen(3000, () => {
    console.log('serving on port 3000')
})