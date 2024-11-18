//Importando o pacote mysql2
const mysql = require('mysql2');

//Criando a conexão com o banco de dados MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastroapi'
});

//Conectando ao banco de dados
connection.connect((err) =>{
if (err) {
    console.error('Erro ao conectar ao banco de dados: ' +err.stack);
    return;
}
console.log('Conectado ao banco de dados com id' + connection.threadId);
});

module.exports = connection;