const { Router } = require("express");

const { getAllCustomers, findUser, getAllAdmins, getAllSuperAdmins, getAllShopManagers } = require("../controllers/users");

const router = Router();

router.get("/customers", getAllCustomers);
router.get("/admin", getAllAdmins);
router.get("/superadmin", getAllSuperAdmins);
router.get("/ShopManagers", getAllShopManagers);

router.get("/finduser", findUser);

module.exports = router;
