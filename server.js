const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerRoutes = require("./routes/registerRoutes");
require("./db");

const PORT = 3002;
// const dbURI =
//   "mongodb+srv://sanan:1234@cluster0.a3ydmjf.mongodb.net/login_register";
// mongoose
//   .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((result) => {
//     app.listen(PORT, () => {
//       console.log("Server started on port 3002");
//     });
//   })
//   .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("Server started on port 3002");
});

app.use(express.json());

app.use("/register", registerRoutes);

app.use("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Error" });
});
