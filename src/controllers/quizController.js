var quizModel = require("../models/quizModel");

// grafico de personagens favoritos
function personagens(req, res){
    quizModel.buscarPersonagens()
    .then(resultado => res.json(resultado))
    .catch(erro => {
        console.log(erro);
        res.status(500).send("Erro no servidor")        
    })
}

// grafico de raças favoritas
function criaturas(req, res){
    quizModel.buscarCriaturas()
    .then(resultado => res.json(resultado))
    
    .catch(erro => {
        console.log(erro);
        res.status(500).send("Erro no servidor")        
    })
}


// quiz
function criaturas(req, res){
    quizModel.buscarCriaturas()
    .then(resultado => res.json(resultado))
    
    .catch(erro => {
        console.log(erro);
        res.status(500).send("Erro no servidor")        
    })
}



module.exports = {
    personagens,
    criaturas
}