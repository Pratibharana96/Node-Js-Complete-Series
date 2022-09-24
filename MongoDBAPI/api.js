const express = require('express');
const dbConnect = require('./mongodb');
const app = express();
const mongodb = require('mongodb')
// useing json to send the request to the server//
app.use(express.json());
// get data from API
app.get('/',async (req,resp) =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});
// POST data from API
app.post('/', async (req,resp) =>{
     let data = await dbConnect();
     let result = await data.insertOne(req.body)
     resp.send(result)
})
// PUT data from API
//giving extra parameter in url for changing the name only in that case need to pass namein param
app.put('/:name',async (req,resp) =>{
// app.put('/',async (req,resp) =>{
   let data = await dbConnect();
   let result = await data.updateOne(
    // {name: 'mac pro 6'},
       {name: req.params.name},//For passing param in the url we use req.params.name
    // {name: req.body.name},//For passing param in the body we use req.body.name
       { $set:req.body}
   )
   resp.send({result:"update"})
})
// Delete API MongoDB//
app.delete('/:id', async (req,resp) =>{
    console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne(
        {_id: new mongodb.ObjectID(req.params.id)}//for deleting id need mongodb object and its _id in the db 
        )  //for id matching )
    resp.send(result)
})
app.listen(12200)