class Item {
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

class Inventario {
    constructor() {
        this.itens = [];
    }

    addItem(item) {
        this.itens.push(item);
    }

    removeItem(nomeItem) {
        this.itens = this.itens.filter(item => item.nome !== nomeItem);
    }

    listItems() {
        this.itens.forEach(item => {
            console.log(item.getDetalhes());
        });
    }

    findItemsByType(tipo) {
        return this.itens.filter(item => item.tipo === tipo);
    }

    totalWeight() {
        return this.itens.reduce((total, item) => total + item.peso, 0);
    }
}

const inventario = new Inventario();
inventario.addItem(new Item("Espada Longa", "Espada afiada para combates", "Arma", 10));
inventario.addItem(new Item("Poção de Vida", "Recupera 50 pontos de vida", "Poção", 1));
inventario.addItem(new Item("Escudo", "Protege contra ataques", "Defesa", 15));

console.log("Itens no Inventário:");
inventario.listItems();

console.log("\nItens do tipo 'Arma':");
inventario.findItemsByType("Arma").forEach(item => console.log(item.getDetalhes()));

console.log("\nPeso total do inventário:", inventario.totalWeight(), "unidades");

inventario.removeItem("Poção de Vida");
console.log("\nApós remover a Poção de Vida:");
inventario.listItems();