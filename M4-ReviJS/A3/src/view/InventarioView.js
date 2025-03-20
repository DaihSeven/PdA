export class InventarioView {
    displayItems(items) {
        console.log("Itens no Inventário:");
        items.forEach(item => console.log(item));
    }

    displayItemsByType(items, tipo) {
        console.log(`\nItens do tipo '${tipo}':`);
        items.forEach(item => console.log(item.getDetalhes()));
    }

    displayTotalWeight(peso) {
        console.log("\nPeso total do inventário:", peso, "unidades");
    }
}