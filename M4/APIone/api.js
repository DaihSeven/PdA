import express from "express";

const app = express();
const PORT = 3000;
const arrResponse = { name: "Daiane", company: "DaihEnterprises"};


app.get('/', (req, res) => {
    /*res.send('Hello World!');*/ //não funciona dois res ao mesmo tempo, o primeiro res.send já finaliza a requisição
    /*res.json({ message: 'Hello World!' });*/ //retorna um json com a mensagem
    res.json(arrResponse);
});

app.listen(PORT, ( ) => {
    console.log(`Server is running on port ${PORT}`);
});
