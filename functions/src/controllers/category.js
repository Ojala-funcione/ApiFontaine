const {db} = require("../db/db");

const addCategory = async (req, res, next) => {
  try {
    const category = req.body;
    console.log(category);
    const newCategory = await db.collection("category").add(category);
    res.json("Categoria añadida correctamente");
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
module.exports = { addCategory, allCategories };
