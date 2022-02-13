const axios = require("axios");
const { db } = require("../db/db");

const createProduct = async (req, res, next) => {
    try {
        
        const { name, description, price, category, image, gallery, discountinpercent, stock, sku, saleprice, barcode } = req.body;

        const newProduct = {
            name,
            description,
            price,
            image,
            gallery,
            discountinpercent,
            stock,
            sku,
            saleprice,
            barcode
        };

        await db.collection("products/category/tinturas").add(newProduct);
        res.send("Producto agregado");        
      
    } catch (error) {
        next(error);
    }
};


const getAllProducts = async (req, res, next) => {
    try {
        
        res.send("getAllProducts");
    } catch (error) {
        next(error);
    }
        
    }



const updateProduct = async (req, res, next) => {
    try {
        
        res.send("updateProduct");
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        
        res.send("deleteProduct");
    } catch (error) {
        next(error);
    }
};

const getProduct = async (req, res, next) => {
    try {
        
        res.send("getProduct");
    } catch (error) {
        next(error);
    }
};

const getAllProductsByCategory = async (req, res, next) => {
    try {
        
        res.send("getAllProductsByCategory");
    } catch (error) {
        next(error);
    }
};



module.exports = { createProduct };