//1. IMC
/*
1. Índice de Massa Corporal (IMC)
Lógica: IMC = peso / (altura²)

Receber peso e altura
Aplicar fórmula: peso dividido pela altura ao quadrado
Classificar resultado (abaixo do peso, normal, sobrepeso, obesidade)

Entrada: peso=70, altura=1.75
Cálculo: 70 / (1.75 * 1.75) = 22.86
Classificação: Normal
*/
function imc(peso,altura){
    const imc = peso / altura ** 2;
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso normal";
    } else {
        classificacao = "Acima do peso";
    }

    // IMPORTANTE: Retornar o resultado!
    /*return {
        imc: imcValue.toFixed(2), //definir o imsValue
        classificacao: classificacao
    };
    */
    // OU simplesmente retornar a classificação:
    return classificacao;
};
console.log("=== IMC ===");
console.log(imc(53, 1.57));
console.log(imc(70, 1.75));
console.log(imc(90, 1.80));
console.log(imc(120, 1.80));
// 2. TROCAR ELEMENTOS DO ARRAY
/*Lógica: Swap de posições específicas ou algoritmo de ordenação

Usar variável temporária: temp = arr[i]; arr[i] = arr[j]; arr[j] = temp
Ou destructuring: [arr[i], arr[j]] = [arr[j], arr[i]]
Cuidado com índices válidos */
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

// Teste
console.log("=== TROCAR ELEMENTOS ===");
console.log(trocarElementos([1, 2, 3, 4, 5], 0, 4)); // [5, 2, 3, 4, 1]
console.log(trocarElementos(['a', 'b', 'c'], 1, 2));  // ['a', 'c', 'b']

// 3. TEMPO PARA TEXTO
/**Lógica: Converter segundos/minutos em formato legível

Calcular horas: Math.floor(segundos / 3600)
Calcular minutos restantes: Math.floor((segundos % 3600) / 60)
Segundos restantes: segundos % 60
Formatar como "2h 30min 45s" */
function timeForText(segundosTotais) {
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;
    
    let resultado = "";
    
    if (horas > 0) {
        resultado += `${horas}h `;
    }
    if (minutos > 0) {
        resultado += `${minutos}min `;
    }
    if (segundos > 0) {
        resultado += `${segundos}s`;
    }
    
    return resultado.trim() || "0s";
}

// Teste
console.log("\n=== TEMPO PARA TEXTO ===");
console.log(timeForText(3661)); // "1h 1min 1s"
console.log(timeForText(7200)); // "2h"
console.log(timeForText(125));  // "2min 5s"
console.log(timeForText(45));   // "45s"

// 4. SOMA DE NÚMEROS - FUNÇÃO UNIVERSAL
/**Lógica: Somar elementos e comparar arrays
Usar reduce() ou loop para somar cada array
Comparar as somas ou retornar array com as somas
arr.reduce((acc, num) => acc + num, 0) */
function processarArrays(...args) {
    // Se o primeiro argumento é um array de arrays, usar ele
    // Senão, tratar todos os argumentos como arrays individuais
    let arrays;
    
    if (args.length === 1 && Array.isArray(args[0]) && Array.isArray(args[0][0])) {
        // Formato: processarArrays([[1,2], [3,4]])
        arrays = args[0];
    } else {
        // Formato: processarArrays([1,2], [3,4]) ou processarArrays([1,2])
        arrays = args;
    }
    
    // Validação
    if (arrays.length === 0) {
        return { erro: "Nenhum array fornecido" };
    }
    
    // Calcular somas
    const somas = arrays.map((arr, index) => {
        if (!Array.isArray(arr)) {
            throw new Error(`Argumento ${index + 1} não é um array`);
        }
        return arr.reduce((acc, num) => acc + num, 0);
    });
    
    // Resultado base
    const resultado = {
        quantidadeArrays: arrays.length,
        somas: somas,
        somaTotal: somas.reduce((acc, soma) => acc + soma, 0)
    };
    
    // Se apenas 1 array - informações simples
    if (arrays.length === 1) {
        resultado.info = `Array único com soma ${somas[0]}`;
        return resultado;
    }
    
    // Se múltiplos arrays - fazer comparação
    const maiorSoma = Math.max(...somas);
    const menorSoma = Math.min(...somas);
    const indiceMaior = somas.indexOf(maiorSoma);
    const indiceMenor = somas.indexOf(menorSoma);
    
    // Verificar se há empates
    const somasUnicas = [...new Set(somas)];
    const temEmpate = somasUnicas.length < somas.length;
    
    resultado.comparacao = {
        maior: {
            valor: maiorSoma,
            array: `array${indiceMaior + 1}`,
            indice: indiceMaior
        },
        menor: {
            valor: menorSoma,
            array: `array${indiceMenor + 1}`,
            indice: indiceMenor
        },
        temEmpate: temEmpate,
        diferenca: maiorSoma - menorSoma
    };
    
    return resultado;
}

// Testes
console.log("\n=== FUNÇÃO UNIVERSAL - SOMA DE ARRAYS ===");

// Teste 1: Array único
console.log("1 array:", processarArrays([1, 2, 3, 4]));
// {quantidadeArrays: 1, somas: [10], somaTotal: 10, info: "Array único com soma 10"}

// Teste 2: Múltiplos arrays como parâmetros
console.log("\nMúltiplos arrays:", processarArrays([1, 2], [3, 4, 5], [6]));
// {quantidadeArrays: 3, somas: [3, 12, 6], somaTotal: 21, comparacao: {...}}

// Teste 3: Array de arrays
console.log("\nArray de arrays:", processarArrays([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
// {quantidadeArrays: 3, somas: [6, 9, 30], somaTotal: 45, comparacao: {...}}

// Teste 4: Muitos arrays
console.log("\n6 arrays:", processarArrays([10], [20, 30], [5, 15, 25], [1, 2, 3], [100], [7, 8, 9]));

// Teste 5: Arrays com empate
console.log("\nCom empate:", processarArrays([1, 4], [2, 3], [5, 0]));
// Todos somam 5 - vai detectar empate

// 5. MATCH DE PARÊNTESES - SIMPLES
/**Lógica: Usar stack (pilha)

Para cada "(": empilhar
Para cada ")": desempilhar se stack não vazio
No final, stack deve estar vazia
Verificar balanceamento: ()() ✓, (() ✗ */
function validParentheses(str) {
    let count = 0;
    for (let char of str) {
        if (char === '(') count++;
        if (char === ')') count--;
        if (count < 0) return false; // ')' antes de '('
    }
    return count === 0;
}

// Teste
console.log("\n=== MATCH DE PARÊNTESES ===");
console.log(validParentheses("()")); // true
console.log(validParentheses("(())")); // true
console.log(validParentheses("(()")); // false

// 6. MAIOR E MENOR NÚMERO - SIMPLES
/**Lógica: Percorrer array uma vez

Inicializar max e min com primeiro elemento
Comparar cada elemento com max/min atuais
Atualizar quando encontrar maior/menor
Ou usar Math.max(...array) e Math.min(...array) */
function findMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

// Versão que retorna objeto
function minMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

// Teste
console.log("\n=== MAIOR E MENOR ===");
console.log(findMinMax([3, 1, 4, 1, 5, 9, 2, 6])); // [1, 9]
console.log(minMax([10, -5, 0, 15, 3])); // {min: -5, max: 15}

// 7. NÚMERO FALTANTE - SIMPLES
/**Lógica: Sequência aritmética

Faltante: Soma esperada - soma atual = número faltante
Próximo: Identificar padrão (diferença constante) e aplicar
Para 1,2,3,5: faltante = 4; próximo = 6 */
function missingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Próximo número em sequência
function nextNumber(arr) {
    return arr[arr.length - 1] + (arr[1] - arr[0]);
}

// Teste
console.log("\n=== NÚMERO FALTANTE/PRÓXIMO ===");
console.log(missingNumber([1, 2, 4, 5])); // 3
console.log(nextNumber([2, 4, 6, 8])); // 10

// 8. PAGINAÇÃO - SIMPLES
/**Lógica: Dividir dados em páginas

totalPaginas = Math.ceil(totalItens / itensPorPagina)
inicio = (paginaAtual - 1) * itensPorPagina
fim = inicio + itensPorPagina
dadosPagina = dados.slice(inicio, fim) */
function paginate(data, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
}

// Versão com informações extras
function paginateInfo(data, page, itemsPerPage) {
    const start = (page - 1) * itemsPerPage;
    return {
        data: data.slice(start, start + itemsPerPage),
        currentPage: page,
        totalPages: Math.ceil(data.length / itemsPerPage)
    };
}

// Teste
console.log("\n=== PAGINAÇÃO ===");
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(paginate(items, 2, 3)); // [4, 5, 6]
console.log(paginateInfo(items, 2, 3)); // {data: [4,5,6], currentPage: 2, totalPages: 4}

// 9. MEDIANA (MEIO) - SIMPLES
function findMedian(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    
    return sorted.length % 2 === 0 
        ? (sorted[mid - 1] + sorted[mid]) / 2 
        : sorted[mid];
}

// Teste
console.log("\n=== MEDIANA ===");
console.log(findMedian([3, 1, 4, 1, 5])); // 3
console.log(findMedian([1, 2, 3, 4])); // 2.5

// 10. DIVISÕES - SIMPLES
/**Lógica: Contar quantas vezes um número pode ser dividido

Loop enquanto número for divisível por divisor
while (num % divisor === 0) { num /= divisor; count++; }
Ou contar divisores de um número */
function countDivisions(num, divisor) {
    let count = 0;
    while (num % divisor === 0) {
        num /= divisor;
        count++;
    }
    return count;
}

// Contar todos os divisores
function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) count++;
    }
    return count;
}

// Teste
console.log("\n=== DIVISÕES ===");
console.log(countDivisions(16, 2)); // 4 (16→8→4→2→1)
console.log(countDivisors(12)); // 6 (1,2,3,4,6,12)