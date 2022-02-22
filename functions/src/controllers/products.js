const {db} = require("../db/db");

const createProduct = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      category,
      image,
      gallery,
      discountinpercent,
      stock,
      sku,
      saleprice,
      barcode,
    } = req.body;

    const newProduct = {
      name,
      description,
      price,
      category,
      image,
      gallery,
      discountinpercent,
      stock,
      sku,
      saleprice,
      barcode,
    };

    await db.collection("products").add(newProduct);
    res.send("Producto agregado");
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const productsRef = await db.collection("products").get();
    const products = productsRef.docs.map((p) => ({
      id: p.id,
      ...p.data(),
    }));
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const {
      id,
      name,
      description,
      price,
      category,
      image,
      gallery,
      discountinpercent,
      stock,
      sku,
      saleprice,
      barcode,
    } = req.body;

    const productRef = db.collection("products").doc(id);

    await productRef.update({
      name: name,
      price: price,
      description: description,
      category: category,
      image: image,
      gallery: gallery,
      discountinpercent: discountinpercent,
      stock: stock,
      sku: sku,
      saleprice: saleprice,
      barcode: barcode,
    });

    res.send("Producto modificado exitosamente");
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const id = req.body;
    console.log("this is the id: ", id);
    await db.collection("products").doc(id.id).delete();
    res.send("Producto borrado exitosamente");
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  try {
    const id = req.params;
    const productRef = await db.collection("products").doc(id.id).get();
    res.json(productRef.data());
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
  getProduct,
};
