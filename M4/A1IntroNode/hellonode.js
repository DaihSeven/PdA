//console.log("Hello Node");

/*
 Criar uma função que receba um parâmetro e verifique se ele é par ou ímpar. Se for par, a função retorna “Par”. Se for ímpar, a função retorna “Ímpar”. Em seguida, faça um laço for que se repita 10 vezes e, para cada repetição, ele pegue o valor de i e verifique se é par ou ímpar com a nossa função criada anteriormente, exibindo no console o resultado de cada número.
*/

function ParOrImpar(num) {
    if (num % 2 === 0) {
        return "Par";
        //console.log("Par");
    } else {
        return "Ímpar";
        //console.log("Ímpar");
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`O número ${i} é ${ParOrImpar(i)}`);
}
//ParOrImpar(3);
//ParOrImpar(49632);
//Comentado funciona sem o for