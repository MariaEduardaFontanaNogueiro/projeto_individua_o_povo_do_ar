var express = require("express");
var router = express.Router();
var dashboardController = require("../controllers/dashboardController")
// conecta com o KPIModel

//get = busca os dados
// req = o usuario enviou (front)
// res = resposta para o usuario

// KPI 1
router.get("/personagemFavorito", function (req, res){
    dashboardController.buscarPersonagemFavorito(req, res);
});


// KPI 2
router.get("/Raca", function (req, res){
    dashboardController.buscarRaca(req, res);
});

// KPI 3
router.get("/Raca_ser/:id_usuario", function (req, res){
        dashboardController.mostrarRaca_ser(req, res)
});

// KPI 4
router.get("/comentario", function (req, res){
        dashboardController.comentario_personagem(req, res)
});





// possibilita para tem tiver a rota poder usar
module.exports = router;


