const express = require("express");
const artists = require("./artists");
const shows = require("./shows");
const command = require("./command");

const router = express.Router();

router.use("/artists", artists);
router.use("/shows", shows);
router.use("/command", command);

module.exports = router;
