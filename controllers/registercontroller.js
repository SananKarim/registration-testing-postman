const { validateSignup } = require("../rules/rules");
const Registers = require("../models/register");
const Joi = require("joi");



const registration = (req, res) => {

  const register = new Registers(req.body);
  const { error } = validateSignup(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  } else {
    console.log("line 1");
    register
      .save()
      .then((result) => {
        console.log("line 2");
        res.status(200).json({ message: "Registration successful!" });
      })
      .catch((error) => {
        let errorMessage = "Registration failed!";

        if (error.code === 11000) {
          errorMessage = "Email already exists!";
        } else if (error.name === "ValidationError") {
          errorMessage = error.message;
        }

        console.log("line 3");

        res.status(500).json({ error: errorMessage });
      });
  }
};

module.exports = {
  registration,
};
