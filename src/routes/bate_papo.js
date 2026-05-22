var express = require("express");
var router = express.Router();

var bate_papoController = require("../controllers/bate_papoController");

router.get("/listar", function (req, res) {
    bate_papoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    bate_papoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    bate_papoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    bate_papoController.publicar(req, res);
});

router.put("/editar/:idbate_papo", function (req, res) {
    bate_papoController.editar(req, res);
});

router.delete("/deletar/:idbate_papo", function (req, res) {
    bate_papoController.deletar(req, res);
});

module.exports = router;