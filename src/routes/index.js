const express = require("express");
<<<<<<< HEAD
const artists = require("./artists");
const shows = require("./shows");
const command = require("./command");

const router = express.Router();

router.use("/artists", artists);
router.use("/shows", shows);
router.use("/command", command);
=======
const user = require("./user");
const artist = require("./artist");

const router = express.Router();

router.use("/artist", artist);
router.use("/user", user);
>>>>>>> 4cc3b243ec8af3d5c0a965b37a719aebe7b8cfa1

module.exports = router;
