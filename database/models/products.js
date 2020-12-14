const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Products = new Schema({
    title: {type:String},
    category: {type:String},
    description: {type:String},
    image: {type:String},
    user: {type:Schema.ObjectId, ref:'user'}

})

const products = mongoose.model('Products', Products);
module.exports = products;