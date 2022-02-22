require("dotenv").config();
const {
  initializeApp,
  applicationDefault,
  // cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  // Timestamp,
  // FieldValue,
} = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
  projectId: "fontaine-dev",
});
const db = getFirestore();
db.settings({ignoreUndefinedProperties: true});

module.exports = {db};
