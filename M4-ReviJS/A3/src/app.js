import { Item } from './models/Item.js';
import { InventarioController } from './controllers/InventarioController.js';

const controller = new InventarioController();

controller.addItem(new Item("Espada Longa", "Espada afiada para combates", "Arma", 10));
controller.addItem(new Item("Poção de Vida", "Recupera 50 pontos de vida", "Poção", 1));
controller.addItem(new Item("Escudo", "Protege contra ataques", "Defesa", 15));

console.log("Itens no Inventário:");
controller.listItems();

console.log("\nItens do tipo 'Arma':");
controller.findItemsByType("Arma");

console.log("\nPeso total do inventário:");
controller.displayTotalWeight();

controller.removeItem("Poção de Vida");
console.log("\nApós remover a Poção de Vida:");
controller.listItems();