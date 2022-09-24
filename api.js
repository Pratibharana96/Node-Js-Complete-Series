const express = require('express');
const dbConnect = require('./MongoDBAPI/mongodb');
const app = express();

app.get('/',async (req,resp) =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send({name:'anil'})
});

app.listen(12200)