const { db } = require("../db/db");

const getAllPermissions = async (req, res, next) => {
  try {
    const roles = await db.collection("roles").get();
    const permissions = roles.docs.map((r) => ({
      id: r.id,
      ...r.data(),
    }));
    res.json(permissions);
  } catch (error) {
    next(error);
  }
};


const getPermissionsByType = async (req, res, next) => {
  try {
    const { role } = req.body;
    const roles= await db.collection("roles").get();
    const permissions = roles.docs.map((r) => ({
      id: r.id,
      ...r.data(),
    }));

    const filteredPermissions = permissions.filter((p) => p[role]);
    res.json(filteredPermissions);
  } catch (error) {
    next(error);
  }
};




module.exports = { getAllPermissions, getPermissionsByType };
