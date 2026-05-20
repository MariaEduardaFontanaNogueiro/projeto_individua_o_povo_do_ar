var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// graficos
router.get("/personagens", quizController.personagens);
router.get("/criaturas", quizController.criaturas);






// quiz
router.get("/criaturas", quizController.criaturas);





module.exports = router;