const { validateSignup } = require("../middlewares/validator");
const Registers = require("../models/register");

const registration = (req, res) => {
  const { name, email, password } = req.body;
  const { error } = validateSignup(name, email, password);

  if (error) {
    return res.status(400).json({ error: error.details });
  } else {
    const { name, email, password } = req.body;
    const register = new Registers({
      name: name,
      email: email,
      password: password,
    });

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
        console.log(error);
        res.status(500).json({ error: errorMessage });
      });
  }
};

module.exports = {
  registration,
};
