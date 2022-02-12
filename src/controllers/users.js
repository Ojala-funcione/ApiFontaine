const axios = require("axios");
const { db } = require("../db/db");

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

const findUser = async (req, res, next) => {
  try {
    const { search, searchType } = req.body;

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
module.exports = { getAllCustomers, findUser };
