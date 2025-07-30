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

console.log(imc(53, 1.57));
console.log(imc(70, 1.75));
console.log(imc(90, 1.80));
console.log(imc(120, 1.80));