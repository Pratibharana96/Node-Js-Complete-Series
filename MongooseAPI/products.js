const mongoose = require('mongoose');
// create schema
const productSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
});
// create Model
module.exports = mongoose.model('products',productSchema)
