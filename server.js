const express = require('express');
const bodyParser = require('body-parser');

//Middleware para usar PUT e DELETE com POST
const methodOverride = require('method-override');

const app = express();
const port = 2500;

//Importando a conexao com o banco de dados
const db = require('./db');

//Usando o express.json() para parsing de JSON
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//Configuração do Express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended:false }));
app.use(bodyParser.json());

//Permite que o Express entenda PUT e DELETE via campo  '_method'
app.use(methodOverride('_method'));

//ROta de Index (exibir todos os usuários - unsando GET)
app.get('/', (req, res) =>{
    db.query('SELECT * FROM users', (err, results) =>{
    if(err){
            console.error('Erro ao consultar os usuários', err);
            return res.status(500).json({ error: 'Erro ao consultar os usuários'});
    }
    res.render('index', {users: results});
    });
});

//Rota para Exibir formulário de criação do usuário

app.get('/add', (req,res) =>{
    res.render('add');
});

//Rota para criar um novo usuário (usando POST)

app.post('/add', (req, res) => {
const { name, age } = req.body;
console.log('Dados recebidos:', req.body);

db.query('INSERT INTO users(name, age) VALUES(?, ?)', [name, age], (err, result) =>{
    if(err){
        console.error('Erro ao adicionar usuário: ', err);
        return res.status(500).json({error: 'Erro ao adicionar'});
    }
    res.redirect('/');
});
});



//Rota para exibir o formulário de edição de um usuário

//Rota para atualizar um usuario (Usando PUT)

//Rota para excluir um usuário (agora usando DELETE)


//Inciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
