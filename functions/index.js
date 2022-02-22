const functions = require("firebase-functions");
const app = require("./src/app.js");
const server = app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening http://localhost:${server.address().port}`);
});
// const express = require("express");
// const PORT = 3008;
// const app = express();
// app.get("/", (req, res, next) => {
//   res.send("Hola Funciona");
// });
// app.listen(PORT, () => {
//   console.log("Server is running on PORT: ", PORT);
// });
exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
