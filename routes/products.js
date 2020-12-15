const router = require('express').Router();
let Product = require('../database/models/product.model')

router.post('/api/product/',(req,res) => {

 const username = req.body.username;
 const title = req.body.title;
 const description = req.body.description;
 const category = req.body.category;
 const image = req.body.image;

 Product.create({
  username,
  title,
  description,
  category,
  image,

 }).then(dbusers =>{
     res.json(dbusers);
 })
 .catch(err => {
     res.json(err);

 });
});




module.exports = router;

// app.post("/submit", ({ body }, res) => {
//     User.create(body)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });