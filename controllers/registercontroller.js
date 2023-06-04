const Registers = require("../models/register");
const bcrypt = require("bcrypt");

const registration = (req, res) => {
  const { name, email, password } = req.body;

  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  


    const register = new Register({
      name: name,
      email: email,
      password: hashedPassword, // Store the hashed password
    });


    if (!emailRegex.test(email)) {
      res.status(400).json({ error: "Invalid email address!" });
      return; // Stop further execution
    }

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
  
};
module.exports = {
  registration,
};
