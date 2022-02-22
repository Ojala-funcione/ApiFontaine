// const axios = require("axios");
const {db} = require("../db/db");

/* ------------ OBTENER TODOS LOS USUARIOS QUE SEAN CUSTOMERS ------------ */

const getAllCustomers = async (req, res, next) => {
  try {
    const customersRef = db.collection("users");
    const info = await customersRef.where("rol", "==", "customers").get();
    const customers = info.docs.map((c) => ({
      id: c.id,
      ...c.data(),
    }));

    res.status(200).json(customers ? customers : "Nothing to show");
  } catch (error) {
    next(error);
  }
};

/* ------------ OBTENER TODOS LOS USUARIOS QUE SEAN ADMINS ------------ */

const getAllAdmins = async (req, res, next) => {
  try {
    const adminsRef = db.collection("users");
    const info = await adminsRef.where("rol", "==", "admin").get();
    const admin = info.docs.map((c) => ({
      id: c.id,
      ...c.data(),
    }));

    res.status(200).json(admin ? admin : "Nothing to show");
  } catch (error) {
    next(error);
  }
};

/* ------------ OBTENER TODOS LOS USUARIOS QUE SEAN SUPERADMINS ------------ */

const getAllSuperAdmins = async (req, res, next) => {
  try {
    const superAdminsRef = db.collection("users");
    const info = await superAdminsRef.where("rol", "==", "superAdmin").get();
    const superAdmin = info.docs.map((c) => ({
      id: c.id,
      ...c.data(),
    }));

    res.status(200).json(superAdmin ? superAdmin : "Nothing to show");
  } catch (error) {
    next(error);
  }
};

/* ------------ OBTENER TODOS LOS USUARIOS QUE SEAN ShopManager ------------ */

const getAllShopManagers = async (req, res, next) => {
  try {
    const ShopManagerRef = db.collection("users");
    const info = await ShopManagerRef.where("rol", "==", "ShopManager").get();
    const ShopManager = info.docs.map((c) => ({
      id: c.id,
      ...c.data(),
    }));

    res.status(200).json(ShopManager ? ShopManager : "Nothing to show");
  } catch (error) {
    next(error);
  }
};

/* -------- OBTENER CUALQUIER TIPO DE USUARIO X CAMPO PERSONALIZADO -------- */

const findUser = async (req, res, next) => {
  try {
    const {search, searchType} = req.body;

    const querySnapshot = await db
        .collection("users")
        .where(searchType, "==", search)
        .get();
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const id = req.body;
    await db.collection("users").doc(id.id).delete();
    res.send("Usuario borrado exitosamente");
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const {email, firstName, lastName, role, uid} = req.body;

    const userRef = db.collection("users").doc(uid);

    await userRef.update({
      firstName: firstName,
      lastName: lastName,
      role: role,
      email: email,
    });

    res.send("Usuario modificado exitosamente");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomers,
  getAllAdmins,
  getAllSuperAdmins,
  getAllShopManagers,
  findUser,
  deleteUser,
  updateUser,
};
