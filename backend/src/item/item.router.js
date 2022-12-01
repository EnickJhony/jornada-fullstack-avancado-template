//  Imports
const express = require("express");
const controller = require("./item.controller");

//  Rota vinda do express
const router = express.Router();

//  Rotas da aplicacao 'item'
router.get("/", controller.findAll);
router.get("/:id", controller.findById);

//  Export
module.exports = router;
