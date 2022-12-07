const express = require("express");
const controller = require("./category.controller");

const router = express.Router();

router.get('/', controller.findAll);


module.exports = router;