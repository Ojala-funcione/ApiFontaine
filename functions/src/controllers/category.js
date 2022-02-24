const {db} = require("../db/db");

const addCategory = async (req, res, next) => {
  try {
    const category = req.body;
    await db.collection("category").add(category);
    res.json("Categoria añadida correctamente");
  } catch (error) {
    next(error);
  }
};

const addSubcategory = async (req, res, next) => {
  try {
    const info = req.body;
    console.log(info);
    const catRef = await db
        .collection("category")
        .doc(info.category)
        .collection(info.subcategory.name)
        .add(info.subcategory);
    console.log(catRef);
    res.json("Subcategoria añadida correctamente");
  } catch (error) {
    next(error);
  }
};

const allCategories = async (req, res, next) => {
  try {
    const categoriesRef = await db.collection("category").get();
    const categories = categoriesRef.docs.map((c) => ({
      id: c.id,
      ...c.data(),
    }));
    res.json(categories);
  } catch (error) {
    next(error);
  }
};
module.exports = {addCategory, allCategories, addSubcategory};
