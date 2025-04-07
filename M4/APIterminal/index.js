import http from  'http';
import {v4} from 'uuid';//gera id's diferentes, pela biblioteca uuid.

const PORT = 3000;
const grades = [
    {
        studentName: "Daiane",
        subject: "Mathematics",
        grade: 9.5
    },
]

const server = http.createServer((req, res) => {
    //funções ou códigos para  do backend
    const {method, url} = req; //desestruturação, pega o método e a url da requisição.
        let body = '';//inicia vazio para poder mudar

        //quando pega'data' faça alguma coisa,  ou seja, quando receber dados do cliente.
        req.on('data', (chunk) => { //por ter um parametro só pode ficar fora dos ();
            body += chunk.toString(); //converte o buffer para string, += é para agregar os valores.
        });

        req.on('end', () => {
            if (url === '/grades' && method === 'GET'){
                res.writeHead(200, {'Content-Type': 'application/json'}); //cabeçalho coerente é importante.
                res.end(JSON.stringify(grades));
            } 
            //POST AINDA PRECISA SER AJUSTADO POIS NÃO PERMITE ENVIAR OS DADOS
            else if (url === '/grades' && method === 'POST'){
                const { studentName, subject, grade } = JSON.parse(body); //pega o corpo da requisição e transforma em objeto.
                const newGrade = { id: v4() ,studentName, subject, grade };//cria um novo objeto com id, nome do aluno, disciplina e nota.
                //id: v4() gera um id único para cada objeto.
                grades.push(newGrade); //adiciona o novo objeto no array grades.
                res.writeHead(201, {'Content-Type': 'application/json'});
                res.end(JSON.stringify(newGrade)); //retorna o novo objeto criado.
            }
            else {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({ message:'Route Not Found'}));
            }
        });
});

server.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
});