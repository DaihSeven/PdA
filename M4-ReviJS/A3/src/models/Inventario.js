import { Item } from './Item.js';

export class Inventario {
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
        return this.itens.map(item => item.getDetalhes());
    }

    findItemsByType(tipo) {
        return this.itens.filter(item => item.tipo === tipo);
    }

    totalWeight() {
        return this.itens.reduce((total, item) => total + item.peso, 0);
    }
}