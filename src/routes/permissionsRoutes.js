const { Router } = require("express");

const {getAllPermissions, getPermissionsByType} = require("../controllers/permissions");

const router = Router();

router.get("/permissions", getAllPermissions);
router.get("/permissionsbytype", getPermissionsByType);

module.exports = router;
