const express = require("express");
const User = require("../database/models/user");
const router = express.Router();

//Products model are going be used to for any activity we will perform

//route product is (/api/products/post)
router.post("/Products", async (req, res) => {
  const usersProduct = new products({

    title: req.body[products.title],
    category: req.body[products.category],
    description: req.body[products.description],
    image: req.body[products.image]
  });
  usersProduct.user = req.user._id; 
try {
  res.send(usersProduct);
} catch (err) {
  res.json({ message: err });
}
});


// //get all products is (/api/products/all)
// router.get("/api/user/all", async (req, res) => {
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
