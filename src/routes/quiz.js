var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");
var ca

// graficos
router.get("/personagens", quizController.personagens);
router.get("/criaturas", quizController.criaturas);

// quiz
router.post("/cadastrarraca", function (req, res){
    quizController.cadastrarraca(req, res);
})


module.exports = router;