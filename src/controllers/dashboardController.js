var dashboardModel = require("../models/dashboardModel");


// KPI 1
function buscarPersonagemFavorito(req, res){
    dashboardModel.buscarPersonagemFavorito()
    .then(resultado => {
        // entrega os dados em formato de JSON
        res.json(resultado);
    })
    // se der erro
    .catch(erro => {
        console.error(erro);
        res.status(500).json(erro);
    })
}


// KPI 2
function buscarRaca(req, res){
    dashboardModel.buscarRaca()
    .then(resultado => {
        // entrega os dados em formato de JSON
        res.json(resultado);
    })
    // se der erro
    .catch(erro => {
        console.error(erro);
        res.status(500).json(erro);
    })
}

// KPI 3
function mostrarRaca_ser(req, res){
    // params: buscar por ID
    var idUsuario = req.params.id_usuario;

    dashboardModel.mostrarRaca_ser(idUsuario)
    .then(resultado => {
        // entrega os dados em formato de JSON
        res.json(resultado);
    })
    // se der erro
    .catch(erro => {
        console.error(erro);
        res.status(500).json(erro);
    })
}

module.exports = {
    buscarPersonagemFavorito,
    buscarRaca,
    mostrarRaca_ser
} 