const { Router } = require("express");

const getAllPermissions = require("../controllers/permissions");

const router = Router();

router.get("/permissions", getAllPermissions);

module.exports = router;
