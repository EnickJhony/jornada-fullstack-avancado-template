//  imports
const express = require("express");
const controller = require("./item.controller");


//  rota vinda do express
const router = express.Router();

//  rota 1 da aplicacao 'home'
router.get("/", controller.findAll);


//  export
module.exports = router;
