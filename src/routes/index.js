const express = require("express");
const user = require("./user");
const artist = require("./artist");

const router = express.Router();

router.use("/artist", artist);
router.use("/user", user);

module.exports = router;
