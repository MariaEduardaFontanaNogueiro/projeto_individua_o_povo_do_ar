var quizModel = require("../models/quizModel");

// grafico de personagens favoritos
function personagens(req, res) {
    quizModel.buscarPersonagens()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).send("Erro no servidor")
        })
}

// grafico de raças favoritas
function criaturas(req, res) {
    quizModel.buscarCriaturas()
        .then(resultado => res.json(resultado))

        .catch(erro => {
            console.log(erro);
            res.status(500).send("Erro no servidor")
        })
}


// quiz
function cadastrarraca(req, res) {
    var fk_raca = req.body.racaServer;
    var idUsuario = req.body.id_usuarioServer;

    quizModel.cadastrarraca(idUsuario, fk_raca)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        );
}



module.exports = {
    personagens,
    criaturas,
    cadastrarraca
}