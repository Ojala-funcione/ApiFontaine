const functions = require("firebase-functions");
const app = require("./src/app");

const PORT = 3006;

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});

exports.app = functions.https.onRequest(app);
