const { Router } = require("express");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({funciona: "siii"});
  } catch (error) {
    next(error);
  }
});

module.exports = router;