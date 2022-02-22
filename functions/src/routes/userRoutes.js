const {Router} = require("express");

const {
  getAllCustomers,
  findUser,
  getAllAdmins,
  getAllSuperAdmins,
  getAllShopManagers,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const router = Router();

router.get("/customers", getAllCustomers);
router.get("/admin", getAllAdmins);
router.get("/superadmin", getAllSuperAdmins);
router.get("/ShopManagers", getAllShopManagers);
router.get("/finduser", findUser);
router.put("/updateuser", updateUser);
router.delete("/deleteuser", deleteUser);

module.exports = router;
