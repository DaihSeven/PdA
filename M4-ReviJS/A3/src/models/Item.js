export class Item {
    constructor(nome, descricao, tipo, peso) {
        this.nome = nome;
        this.descricao = descricao;
        this.tipo = tipo;
        this.peso = peso;
    }

    getDetalhes() {
        return `${this.nome} (${this.tipo}) - ${this.descricao} | Peso: ${this.peso}`;
    }
}