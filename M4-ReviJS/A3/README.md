# Inventário RPG

Sistema com arquitetura MVC (Model-View-Controller);

## Estrutura do projeto:
````
/projeto
│
├── /models
│   ├── Item.js
│   └── Inventario.js
│
├── /view
│   └── InventarioView.js
│
├── /controllers
│   └── InventarioController.js
│
├── index.html
└── app.js
````
### Model

O Model contém as classes Item e Inventario. Essas classes cuidam da lógica de negócios e manipulação de dados.

### View

A View é responsável por exibir os dados ao usuário. Aqui, você pode usar console.log ou adaptar para uma interface web.

### Controller

O Controller faz a ligação entre o Model e a View. Ele recebe as entradas do usuário, atualiza o Model e solicita à View que exiba os dados.

### Principal

Finalmente, o arquivo principal app.js inicializa o Controller e interage com ele.

# Como funciona

### index.html
O index.html é o ponto de entrada da aplicação. Ele carrega os arquivos JavaScript e define a estrutura básica da página.

````
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inventário RPG</title>
</head>
<body>
    <h1>Inventário RPG</h1>
    <pre id="output"></pre>

    <!-- Link para os arquivos JavaScript -->
    <script src="./models/Item.js" type="module"></script>
    <script src="./models/Inventario.js" type="module"></script>
    <script src="./views/InventarioView.js" type="module"></script>
    <script src="./controllers/InventarioController.js" type="module"></script>
    <script src="./app.js" type="module"></script>
</body>
</html>
````

Função:
Cabeçalho (\<head>):

Define o charset e a viewport para garantir que a página seja exibida corretamente em diferentes dispositivos.

Define o título da página (\<title>).

Corpo (\<body>):

Exibe um título (\<h1>) na página.

Cria um elemento \<pre> com o ID output, que pode ser usado para exibir resultados no futuro (embora no exemplo atual os resultados sejam exibidos no console).

Carrega os arquivos JavaScript usando \<script>. O atributo type="module" é necessário para usar a sintaxe de módulos ES6 (import/export).

### models/Item.js
Este arquivo define a classe Item, que representa um item do inventário.

````javascript

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
````
Função:
Classe Item:

Representa um item do inventário com propriedades como nome, descricao, tipo e peso.

O método getDetalhes() retorna uma string formatada com os detalhes do item.

### models/Inventario.js
Este arquivo define a classe Inventario, que gerencia uma lista de itens.

````javascript

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
````
Função:
Classe Inventario:

Gerencia uma lista de itens (this.itens).

Métodos:

addItem(item): Adiciona um item à lista.

removeItem(nomeItem): Remove um item da lista com base no nome.

listItems(): Retorna uma lista de strings com os detalhes de todos os itens.

findItemsByType(tipo): Retorna uma lista de itens de um tipo específico.

totalWeight(): Calcula o peso total de todos os itens no inventário.

### views/InventarioView.js
Este arquivo define a classe InventarioView, que é responsável por exibir os dados ao usuário.

````javascript

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
````
Função:
Classe InventarioView:

Responsável por exibir os dados no console (ou, no futuro, em uma interface gráfica).

Métodos:

displayItems(items): Exibe todos os itens do inventário.

displayItemsByType(items, tipo): Exibe os itens de um tipo específico.

displayTotalWeight(peso): Exibe o peso total do inventário.

### controllers/InventarioController.js
Este arquivo define a classe InventarioController, que faz a ligação entre o Model (Inventario) e a View (InventarioView).

````javascript

import { Inventario } from '../models/Inventario.js';
import { InventarioView } from '../views/InventarioView.js';

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
````
Função:
Classe InventarioController:

Recebe uma instância do Model (Inventario) e da View (InventarioView).

Métodos:

addItem(item): Adiciona um item ao inventário.

removeItem(nomeItem): Remove um item do inventário.

listItems(): Solicita ao Model a lista de itens e exibe na View.

findItemsByType(tipo): Filtra itens por tipo e exibe na View.

displayTotalWeight(): Calcula o peso total e exibe na View.

### app.js
Este arquivo é o ponto de entrada da lógica da aplicação. Ele cria instâncias das classes e interage com o Controller.

````javascript

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
````

## Função:
## Lógica Principal:

Cria uma instância do InventarioController.

Adiciona itens ao inventário usando o Controller.

Lista todos os itens, filtra por tipo e exibe o peso total.

Remove um item e lista os itens novamente.

## Resumo da Arquitetura MVC
### Model (Modelo):

Item.js e Inventario.js representam os dados e a lógica de negócios.

Responsável por criar e manipular os itens do inventário.

### View (Visão):

InventarioView.js é responsável por exibir os dados ao usuário (no console, por enquanto).

### Controller (Controlador):

InventarioController.js faz a ligação entre o Model e a View.

Recebe as ações do usuário, atualiza o Model e solicita à View que exiba os dados.

### app.js:

Inicializa o Controller e interage com ele para executar a lógica da aplicação.

### index.html:

Carrega todos os arquivos JavaScript e define a estrutura básica da página.

## Fluxo de Execução
O navegador carrega o index.html.

Os arquivos JavaScript são carregados na ordem especificada.

O app.js é executado, criando instâncias e interagindo com o Controller.

O Controller atualiza o Model e solicita à View que exiba os dados.

Os resultados são exibidos no console do navegador.