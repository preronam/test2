const router = require('express').Router();
let Product = require('../database/models/product.model')

router.route('/product').post((req,res) => {
 const username = req.body.username;
 const title = req.body.title;
 const description = req.body.description;
 const category = req.body.category;
 const image = req.body.image;

 const newProduct = new Product({
  username,
  title,
  description,
  category,
  image,

 });


newProduct.save()
.then(() => res.json('Product aaded!'))
.catch(err => res.status(400).json('Error:' + err));
});




// //route product is (/api/products/post)
// router.post("/api/products", async (req, res) => {
//   const usersProduct = new Products({

//     title: req.body[products.title],
//     category: req.body[products.category],
//     description: req.body[products.description],
//     image: req.body[products.image]
//   });
//   usersProduct.user = req.user.username;
//   try {
//     const savedPost = await usersProduct.save();
//     res.send(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });




// // //get all products is (/api/products/all)
// // router.get("/api/user/all", async (req, res) => {
//   try {
//     const getProduct = await Products.find({});
//     console.log("------------------whats up");

//     console.log(getProduct);
//     console.log("--------------------");
//     res.json(getProduct);
//   } catch (erf) {
//     res.send({ errHappend: err });
//   }
// });

// //get specific post ("/api/products/id=" + id)
// router.get("/api/products/id=:productId", async (req, res) => {
//   try {
//     const singleProduct = await Products.findById(req.params.productId);
//     res.json(singleProduct);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// //delete product ("/api/products/del/id=" + id)

// router.delete("/api/products/del/id=:productId", async (req, res) => {
//   try {
//     const deletedProduct = await Products.remove({ _id: req.params.productId });
//     res.json(deletedProduct);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

// //udate one ("/api/products/udate/id=" + id)
// router.patch("/api/products/update/id=:productId", async (req, res) => {
//   try {
//     const productUpdate = await Products.updateOne(
//       { _id: req.params.productId },
//       { $set: { title: req.body.title } }
//     );
//     res.json(productUpdate);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

module.exports = router;
