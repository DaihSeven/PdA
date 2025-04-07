// Importando o módulo express
// O express é um framework para Node.js que facilita a criação de aplicações web e APIs
import express from 'express';
import users from './data.js'; // Importando o arquivo de dados
// O arquivo data.js contém uma lista de usuários
const app = express();
const PORT = 3000;

// Rota raiz
// quando o endpoint for só \ ,  significa a raiz do dominio (http:\\localhost:3000)
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Rota /users
app.get('/users', (req, res) => {
    res.json(users); // Envia os dados como JSON
  });

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Correção: Usar crase (`) e não chaves {}
});