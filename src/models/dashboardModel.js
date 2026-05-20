var database = require("../database/config");

// vai consultar no banco qual personagem tem mais favorito

// KPI 1
function buscarPersonagemFavorito() {
    var instrucaoSQL = `
    SELECT 
    p.nome, 
    COUNT(f.fkPersonagem) as total, 
    p.imgPersonagem
    FROM favorito f
    JOIN personagem p ON f.fkPersonagem = p.idPersonagem
    GROUP BY p.nome, p.imgPersonagem
    ORDER BY total DESC
    LIMIT 1;`;

    // bd executa e da um resultado
    return database.executar(instrucaoSQL)
}

// KPI 2
function buscarRaca() {
    var instrucaoSQL = `
    SELECT 
    r.nome, 
    r.descricao, 
    r.imgRaca, 
    COUNT(rr.fkRaca) AS total_escolhas
    FROM resultado_raca rr
    JOIN raca r ON rr.fkRaca = r.idRaca
    GROUP BY r.idRaca, r.nome, r.descricao, r.imgRaca
    ORDER BY total_escolhas DESC
    LIMIT 1;`;

    // bd executa e da um resultado
    return database.executar(instrucaoSQL)
}

// KPI 3
function mostrarRaca_ser(idUsuario) {
    var instrucaoSQL = `
    SELECT 
	r.nome as nome_raca,
    ROUND((COUNT(*) * 100/ total.total_usuarios)) AS porcentagem,
    r.imgRaca as img
    FROM resultado_raca rr
    JOIN raca r ON rr.fkRaca = r.idRaca
    JOIN (
		SELECT 
		COUNT(*) as total_usuarios
		FROM resultado_raca 
    ) AS total
    WHERE rr.fkRaca = (
    SELECT fkRaca
    FROM resultado_raca
    WHERE fkUsuario = ${idUsuario}
    LIMIT 1
    )
    GROUP BY r.idRaca, r.nome, r.imgRaca, total.total_usuarios;`;
    return database.executar(instrucaoSQL)
}


module.exports = {
    buscarPersonagemFavorito,
    buscarRaca,
    mostrarRaca_ser
}
