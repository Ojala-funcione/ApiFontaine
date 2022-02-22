const {Router} = require("express");
const {addCategory, allCategories} = require("../controllers/category");

const router = Router();

router.post("/addcategory", addCategory);
router.get("/categories", allCategories);

module.exports = router;
