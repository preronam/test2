const router = require('express').Router();
let Product = require('../database/models/product.model')

router.post('/product').post((req,res) => {

 const username = req.body.username;
 const title = req.body.title;
 const description = req.body.description;
 const category = req.body.category;
 const image = req.body.image;

 const newProduct = Product.create({
  username,
  title,
  description,
  category,
  image,

 });

});


module.exports = router;
