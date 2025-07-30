/*
2. Trocar elementos do array
Lógica: Swap de posições específicas ou algoritmo de ordenação

Usar variável temporária: temp = arr[i]; arr[i] = arr[j]; arr[j] = temp
Ou destructuring: [arr[i], arr[j]] = [arr[j], arr[i]]
Cuidado com índices válidos
*/
function trocarElementos(arr, indice1, indice2) {
    // Verificar se os índices são válidos
    if (indice1 >= 0 && indice1 < arr.length && indice2 >= 0 && indice2 < arr.length) {
        // Método 1: Usando variável temporária
        // let temp = arr[indice1];
        // arr[indice1] = arr[indice2];
        // arr[indice2] = temp;
        
        // Método 2: Usando destructuring (mais moderno)
        [arr[indice1], arr[indice2]] = [arr[indice2], arr[indice1]];
    }
    return arr;
}
console.log(trocarElementos([1, 2, 3, 4, 5], 0, 4)); // [5, 2, 3, 4, 1]
console.log(trocarElementos([10, 20, 30, 40], 1,2));
