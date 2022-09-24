// way to require mongodb new way from doc
const { MongoClient } = require('mongodb');
// Give path ti mongodb:
const url  = 'mongodb://localhost:27017';
const database  = 'e-comm';
const client = new MongoClient(url);

async function dbConnect()
{
    let result = await client.connect();
    let db= result.db(database);
    return db.collection('products');
    // console.log(collection.find().toArray());
    // let response =  await collection.find({name:'Pratibha'}).toArray();
    // let response =  await collection.find({age:25}).toArray();
    // console.log(response);
}
module.exports = dbConnect;