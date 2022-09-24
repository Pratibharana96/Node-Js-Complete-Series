const express = require('express');
require('./config');
const Product = require('./products');
const app = express();

app.use(express.json());

// get method to sav edata using mongoose
app.get("/list",async (req,resp)=>{
    let data =  await Product.find() //get all the data from db
    resp.send(data);

})
app.get("/search/:key", async (req,resp) =>{
    console.log(req.params.key)
    // Now use regix for searching datat from API //
    // used or it find all the name brand price mathcing with all of them //
    let data = await Product.find(
        {
            "$or":[
                { "name":{$regex:req.params.key}},
                { "brand":{$regex:req.params.key}},
                { "price":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data)
   // const data = Product(

})

app.listen(2332);