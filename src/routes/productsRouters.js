const { Router } = require("express");

const {createProduct} = require("../controllers/products");

const router = Router();

router.post("/products", createProduct);



module.exports = router;
