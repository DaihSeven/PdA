// 1. Criação de Objeto com as propriedades
const pessoa = {
    nome: "Daiane",
    idade: 20,
    profissao: "Engenheira de Software"
};

// 2. Serialização: conversão de Objeto para JSON
const pessoaJSON = JSON.stringify(pessoa);
console.log("Objeto serializado (JSON):", pessoaJSON);

// 3. Desserialização com Tratamento de Erros
//A função desserializarJSON tenta converter uma string JSON de volta para um objeto usando JSON.parse. Se a string estiver mal formatada, o bloco catch captura o erro e exibe uma mensagem de erro no console.
function desserializarJSON(jsonString) {
    try {
        const objeto = JSON.parse(jsonString);
        console.log("Desserialização bem-sucedida:", objeto);
        return objeto;
    } catch (erro) {
        console.error("Erro ao desserializar JSON:", erro.message);
        return null;
    }
}


// 4. Testes
// Teste com uma string JSON válida
const jsonValido = '{"nome":"Maria","idade":25,"profissao":"Designer"}';
console.log("Testando com JSON válido:");
desserializarJSON(jsonValido);

// Teste com uma string JSON inválida
const jsonInvalido = '{"nome":"Carlos","idade":40,"profissao":"Professor"'; // Falta o fechamento }
console.log("Testando com JSON inválido:");
desserializarJSON(jsonInvalido);