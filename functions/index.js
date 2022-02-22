const functions = require("firebase-functions");
const app = require("./src/app");

const PORT = 3006;

// const server = app.listen(PORT, () => {
//   console.log(`Listening http://localhost:${server.address().port}`);
// });

// const express = require("express");
// const app = express();
// app.get("/", (req, res, next) => {
//   res.send("Hola Esta Funcionando");
// });
app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
