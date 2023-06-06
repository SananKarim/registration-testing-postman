const express = require("express");
const registercontroller = require("../controllers/registercontroller");

const router = express.Router();

router.post("/", registercontroller.registration);

module.exports = router;
