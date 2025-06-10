/*
const numeros = [2, 4, 6, 8];

function nextNumber() {
  const ultimo = numeros[numeros.length - 1];
  return ultimo + 2;
}

console.log(nextNumber());
//numeros[numeros.length - 1] pega o último número do array.

//Depois somamos 2, já que todos os números aumentam de dois em dois.
// Dado o array abaixo:

// Crie uma função que retorne um novo array com a soma de pares consecutivos.
// Exemplo: [1+3, 3+5, 5+7] → [4, 8, 12]
const lista = [1, 3, 5, 7];

function somaParesConsecutivos() {
  const resultado = [];

  for (let i = 0; i < lista.length - 1; i++) {
    resultado.push(lista[i] + lista[i + 1]);
  }

  return resultado;
}

console.log(somaParesConsecutivos()); // Saída esperada: [4, 8, 12]
//for (let i = 0; i < lista.length - 1; i++) garante que não sairemos dos limites do array.

//lista[i] + lista[i + 1] soma pares consecutivos.

//Usamos resultado.push(...) para adicionar o resultado ao novo array.

// Dado o array:

// Crie uma função que encontre e retorne o número que aparece apenas uma vez.
const dados = [3, 4, 3, 4, 5, 6, 6];

function encontrarUnico() {
  return dados.find(num => dados.indexOf(num) === dados.lastIndexOf(num));
}

console.log(encontrarUnico()); // Saída: 5

//indexOf(num) retorna a primeira posição onde o número aparece.

//lastIndexOf(num) retorna a última posição.

//Se essas duas posições forem iguais, então o número só aparece uma vez no array.


// Complete a lógica para identificar o próximo número da sequência abaixo:
const sequencia = [1, 1, 2, 3, 5, 8, 13];

// Qual é o próximo número e por quê?
function sequenciaNumeral(){
  const ultimo = sequencia[sequencia.length - 1];
  const penultimo = sequencia[sequencia.length - 2];
  return ultimo + penultimo;
}

console.log(sequenciaNumeral()); // Deve retornar 21
//A sequência de Fibonacci é construída somando os dois números anteriores.

//13 + 8 = 21, então o próximo número da sequência é 21.

//Multiplicar números pares por 2
//Dado um array de números, crie uma nova lista contendo apenas os números pares multiplicados por 2.
const numbers = [1, 2, 3, 4, 5, 6];

// Passo 1: Criar uma nova lista para armazenar os resultados
const resultado = [];

for (let i = 0; i < numbers.length; i++) {
  const atual = numbers[i];

  // Passo 2: Verificar se o número é par
  if (atual % 2 === 0) {
    // Passo 3: Multiplicar por 2 e guardar
    resultado.push(atual * 2);
  }
}

console.log(resultado); // Saída: [4, 8, 12]

// Dado um array de números, encontre o maior número usando um laço for.
const list = [10, 4, 99, 3, 22];

// Passo 1: Começamos assumindo que o primeiro número é o maior
let maior = list[0];

for (let i = 1; i < list.length; i++) {
  if (list[i] > maior) {
    maior = list[i];
  }
}

console.log(maior);

//Conte a frequência de cada número em um array. Exemplo: [1, 2, 2, 3, 3, 3] → {1: 1, 2: 2, 3: 3}
const entrada = [1, 2, 2, 3, 3, 3];

const contagem = {};

for (let i = 0; i < entrada.length; i++) {
  const numero = entrada[i];

  // Se o número já existe no objeto, incrementa
  if (contagem[numero]) {
    contagem[numero]++;
  } else {
    contagem[numero] = 1;
  }
}

console.log(contagem); // Saída: {1: 1, 2: 2, 3: 3}
*/
//CRIAR UMA FUNÇÃO QUE ANALISE A SEQUÊNCIA DOS NÚMEROS E ENCONTRE O NÚMERO QUE FALTE, OU RETORNE O PRÓXIMO NÚMERO
/**
 * Recebe um array de números ordenados (com um gap ou não)
 * - Se encontrar gap (>1) devolve o número faltante
 * - Senão, devolve o próximo número, usando o passo dos 2 últimos
 */
/*
function analisarSequencia(array) {
  // 1) Percorre tudo procurando gap
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] > 1) {
      return array[i] + 1;                   // número faltante
    }
  }

  // 2) Não achou gap: calcula próximo pelo passo final
  const n = array.length;
  const passo = array[n - 1] - array[n - 2];
  return array[n - 1] + passo;              // próximo valor 
}

// Exemplo de testes
console.log(analisarSequencia([11, 22, 33, 44, 55]));       // 66 
console.log(analisarSequencia([111, 112, 113, 114, 115])); // 16  
console.log(analisarSequencia([31, 32, 33, 35, 36]));    // 4  
*/
function analisarSequencia(array) {
  if (array.length < 2) return null; // Sequência muito pequena

  // Passo padrão (considerando os 2 primeiros elementos)
  const passo = array[1] - array[0];

  // Verifica se há algum elemento que quebra o padrão
  for (let i = 1; i < array.length; i++) {
    const diferenca = array[i] - array[i - 1];
    if (diferenca !== passo) {
      // Se a diferença for maior que o passo, retorna o faltante
      return array[i - 1] + passo;
    }
  }

  // Se não houver gaps, retorna o próximo número
  return array[array.length - 1] + passo;
}

// Testes
console.log(analisarSequencia([11, 12, 13, 14, 15]));    // 16 (próximo)
console.log(analisarSequencia([11, 22, 33, 44, 55]));    // 66 (próximo)
console.log(analisarSequencia([11, 22, 33, 44, 46]));    // 55 (faltante)
console.log(analisarSequencia([31, 32, 33, 35, 36]));    // 34 (faltante)