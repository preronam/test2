const express = require("express");
const User = require("../database/models/user");
const router = express.Router();

//Products model are going be used to for any activity we will perform

//submit product is (/api/products/post)
router.post("/api/users/post", async (req, res) => {
  const postusersProduct = new User({
    username: req.body.username,
    password: req.body.password
  });
  console.log(postusersProduct);
  try {
    users.insertOne(productData);
    res.send(productData);
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
