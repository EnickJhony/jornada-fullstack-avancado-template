//  Imports
const express = require("express");
const controller = require("./item.controller");

//  Rota vinda do express
const router = express.Router();

//  Rotas da aplicacao 'item'
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteById);

//  Export
module.exports = router;
