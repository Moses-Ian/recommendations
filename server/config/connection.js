const {MongoClient} = require('mongodb'); 

const uri = 'mongodb://127.0.0.1:27017/recommendations_db'; 
const client = new MongoClient(process.env.MONGODB_URI || uri); 
client.connect(); 

module.exports = client;