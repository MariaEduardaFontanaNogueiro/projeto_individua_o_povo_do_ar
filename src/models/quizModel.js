var database = require("../database/config");

// grafico de favorito
function buscarPersonagens() {
    var instrucao = `
    SELECT 
    p.nome AS personagem, 
    COUNT(*) AS quantidade
    FROM favorito f
    JOIN personagem p ON f.fkPersonagem = p.idPersonagem
    GROUP BY p.nome;`;
    return database.executar(instrucao);
}

// grafico de raça
function buscarCriaturas() {
    var instrucao = `
        SELECT 
        r.nome AS criatura,
        COUNT(*) AS quantidade
        FROM resultado_raca rr
        JOIN raca r ON rr.fkRaca = r.idRaca
        GROUP BY r.nome;`;
    return database.executar(instrucao);
}



// quiz
function buscarCriaturas(idUsuario, ) {
    var instrucao = `
    INSERT INTO resultado_raca (fkUsuario, fkRaca) VALUES
        (${idUsuario}, ${});`;
    return database.executar(instrucao);
}




module.exports = {
    buscarCriaturas,
    buscarPersonagens
};
