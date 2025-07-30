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
    const somas = arrays.map((arr, index) => {// percorre cada array e calcula a soma
        if (!Array.isArray(arr)) {// verifica se o argumento é um array
            throw new Error(`Argumento ${index + 1} não é um array`);// se não for, lança um erro
        }
        return arr.reduce((acc, num) => acc + num, 0);// usa o método reduce para somar os elementos do array
    });
    
    // Resultado base
    const resultado = {
        quantidadeArrays: arrays.length,// quantidade de arrays fornecidos
        somas: somas,
        somaTotal: somas.reduce((acc, soma) => acc + soma, 0)// soma total de todos os arrays
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
    const somasUnicas = [...new Set(somas)];// cria um conjunto único de somas para verificar empates
    const temEmpate = somasUnicas.length < somas.length;// se o tamanho do conjunto único for menor que o tamanho do array de somas, há empates
    
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

console.log(processarArrays([1, 2, 3], [4, 5, 6])); // Teste com dois arrays
console.log(processarArrays([10, 20, 30], [5, 15, 25], [1, 2, 3])); // Teste com três arrays
console.log(processarArrays([[1, 2], [3, 4]])); // Teste com array de arrays
console.log(processarArrays([1, 2, 3])); // Teste com um único array
console.log(processarArrays()); // Teste com nenhum array
console.log(processarArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // Teste com três arrays
