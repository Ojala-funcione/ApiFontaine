const { Router } = require("express");

const { getAllCustomers, findUser } = require("../controllers/users");

const router = Router();

router.get("/customers", getAllCustomers);
router.get("/finduser", findUser);

module.exports = router;
