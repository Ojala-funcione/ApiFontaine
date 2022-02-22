const {
  initializeApp,
  applicationDefault,
} = require("firebase-admin/app");
const {
  getFirestore,
} = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
  projectId: "fontaine-dev",
});
const db = getFirestore();
db.settings({ignoreUndefinedProperties: true});

module.exports = {db};
