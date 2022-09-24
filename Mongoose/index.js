const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
     name:String,
     age:Number,
     address:String,
     category:String
});

const  saveInDB = async () => {
   const ProductsModel = mongoose.model('products', ProductSchema);
   let data = new ProductsModel({
        name:"m8",
        age:"11",
        address:"Hit vdid niketan",
        category:"New CAt"
     });
   let result = await data.save();
   console.log(result);
}
// saveInDB()
const updateInDB = async ()=>{
     const productUpdate = mongoose.model('products',ProductSchema);
     let data = await productUpdate.updateOne(
          {name:"m8"},
          {
               $set:{age:11, age:'100' }
          }
     )
     console.log(data)
}

// updateInDB();
const deleteInDB = async() =>{
     const Product = mongoose.model('products',ProductSchema);
     let data = await Product.deleteMany({name:'m8'});
     console.log(data);
}
deleteInDB();
// schema what are the field I have in my databse now monsoose validate schemas 
