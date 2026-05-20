var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, apelido, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar (apelido, email, senha, personagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", apelido, email, senha, personagem);

    // Insira exatamente a query do banco aqui, lembrando da apelidonclatura exata nos valores
    //  e na ordem de inserção dos dados.

    // cria o usuario
    var instrucaoUsuario = `
        INSERT INTO usuario (apelido, email, senha) VALUES ('${apelido}', '${email}', '${senha}');
        `;

    console.log("Executando a instrução usuario: \n" + instrucaoUsuario);
    return database.executar(instrucaoUsuario)

        // pega o id
        .then(function () {
            var instrucaoId = `
        SELECT idUsuario FROM usuario
        WHERE email = '${email}'
        ORDER BY idUsuario DESC LIMIT 1
        `;
            return database.executar(instrucaoId);
        })

        // salva o personagem relacionado ao usuario (fk)
        .then(function (resultado) {
            var idUsuario = resultado[0].idUsuario;

            var instrucaoFavorito = `
        INSERT INTO favorito (fkUsuario, fkPersonagem) VALUES
            (${idUsuario}, ${personagem})
            `;
            return database.executar(instrucaoFavorito);
        });
}

module.exports = {
    autenticar,
    cadastrar
};