const express = require('express');
require('./config');
const Product = require('./products');
const app = express();
app.use(express.json());
// Post method to sav edata using mongoose
app.post("/create",async (req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save();
    console.log(req.body)
    resp.send("DONE");
})
// get method to sav edata using mongoose
app.get("/list",async (req,resp)=>{
    let data =  await Product.find() //get all the data from db
    resp.send(data);

})
// Delete method to sav edata using mongoose
app.delete("/deletedata/:_id", async(req,resp) =>{
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
    // let data = await 
})
// Put method to sav edata using mongoose
app.put("/update/:_id", async(req,resp) =>{
    console.log(req.params)
    let data = await Product.updateOne(
        // {} condition
        // #set updated data
        req.params,
        {
            $set:req.body
        }
    );
    resp.send(data);

})

app.listen(51000);