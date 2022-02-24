const {Router} = require("express");
const {
  addCategory,
  allCategories,
  addSubcategory,
} = require("../controllers/category");

const router = Router();

router.post("/addcategory", addCategory);
router.get("/categories", allCategories);
router.post("/addsubcategory", addSubcategory);

module.exports = router;
