require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.json({ message: "Welcome to the Auth Demo" });
});

app.get("/profile", ClerkExpressRequireAuth(), (req, res) => {
  console.log(req.auth);
  return res.json({ name: "Christian", age: 200, city: "Tamale" });
});

app.listen(port, () => {
  console.log(`auth-demo-api running on port ${port}`);
});
