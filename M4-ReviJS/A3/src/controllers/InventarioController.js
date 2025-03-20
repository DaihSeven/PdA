import { Inventario } from '../models/Inventario.js';
import { InventarioView } from '../view/InventarioView.js';

export class InventarioController {
    constructor() {
        this.model = new Inventario();
        this.view = new InventarioView();
    }

    addItem(item) {
        this.model.addItem(item);
    }

    removeItem(nomeItem) {
        this.model.removeItem(nomeItem);
    }

    listItems() {
        const items = this.model.listItems();
        this.view.displayItems(items);
    }

    findItemsByType(tipo) {
        const items = this.model.findItemsByType(tipo);
        this.view.displayItemsByType(items, tipo);
    }

    displayTotalWeight() {
        const peso = this.model.totalWeight();
        this.view.displayTotalWeight(peso);
    }
}