const { Router } = require("express");

const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getProduct,
} = require("../controllers/products");

const router = Router();

router.post("/products", createProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getProduct);
router.delete("/deleteProduct", deleteProduct);
router.put("/udpateProduct", updateProduct);

module.exports = router;
