const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Registers = mongoose.model("Registers", registerSchema);

module.exports = Registers;
