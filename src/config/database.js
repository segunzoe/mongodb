const mongoose = require('mongoose');
// const { connected } = require('process');

const url = "mongodb://0.0.0.0:27017/";
// const client = new MongoClient(url);

const {config} = require('dotenv');
config();

async function connect(url) {
   try {
    mongoose.connect(url || 'mongodb://0.0.0.0:27017')
    console.log("connected to mongodb")
   } catch (error) {
     console.log(error.message)  }
}


module.exports =connect;