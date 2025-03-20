
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    // Método de instância para serialização
    serializar() {
        return JSON.stringify(this);
    }

    // Método de instância para desserialização
    desserializar(jsonString) {
        try {
            const objeto = JSON.parse(jsonString);
            // Verifica se o objeto tem as propriedades necessárias
            if (objeto.nome && objeto.idade && objeto.profissao) {
                // Retorna uma nova instância de Pessoa
                return new Pessoa(objeto.nome, objeto.idade, objeto.profissao);
            } else {
                throw new Error("JSON inválido: propriedades faltando.");
            }
        } catch (erro) {
            console.error("Erro ao desserializar JSON:", erro.message);
            return null;
        }
    }
}

// Testes
// 1. Criação de uma instância da classe
const pessoa1 = new Pessoa("Daiane", 20, "Engenheiro de Software");

// 2. Serialização da instância
const pessoaSerializada = pessoa1.serializar();
console.log("Objeto serializado (JSON):", pessoaSerializada);

// 3. Desserialização de uma string JSON válida
const pessoaDesserializada = pessoa1.desserializar(pessoaSerializada);
console.log("Objeto desserializado:", pessoaDesserializada);

// 4. Teste com uma string JSON inválida
const jsonInvalido = '{"nome":"Carlos","idade":40}'; // Falta a propriedade "profissao"
console.log("Testando com JSON inválido:");
const pessoaInvalida = pessoa1.desserializar(jsonInvalido);
if (!pessoaInvalida) {
    console.log("Falha na desserialização devido a JSON inválido.");
}
*/
/*
class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    // Método de instância para serialização
    serializar() {
        return JSON.stringify(this);
    }

    // Método estático para desserialização
    static desserializar(jsonString) {
        try {
            const objeto = JSON.parse(jsonString);
            // Verifica se o objeto tem as propriedades necessárias
            if (objeto.nome && objeto.idade && objeto.profissao) {
                return new Pessoa(objeto.nome, objeto.idade, objeto.profissao);
            } else {
                throw new Error("JSON inválido: propriedades faltando.");
            }
        } catch (erro) {
            console.error("Erro ao desserializar JSON:", erro.message);
            return null;
        }
    }
}

// Testes
// 1. Criação de uma instância da classe
const pessoa1 = new Pessoa("João", 30, "Engenheiro");

// 2. Serialização da instância
const pessoaSerializada = pessoa1.serializar();
console.log("Objeto serializado (JSON):", pessoaSerializada);

// 3. Desserialização de uma string JSON válida
const pessoaDesserializada = Pessoa.desserializar(pessoaSerializada);
console.log("Objeto desserializado:", pessoaDesserializada);

// 4. Teste com uma string JSON inválida
const jsonInvalido = '{"nome":"Carlos","idade":40}'; // Falta a propriedade "profissao"
console.log("Testando com JSON inválido:");
const pessoaInvalida = Pessoa.desserializar(jsonInvalido);
if (!pessoaInvalida) {
    console.log("Falha na desserialização devido a JSON inválido.");
}
    */