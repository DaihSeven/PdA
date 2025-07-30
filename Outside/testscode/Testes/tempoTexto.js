/*
3. Tempo para texto
Lógica: Converter segundos/minutos em formato legível

Calcular horas: Math.floor(segundos / 3600)
Calcular minutos restantes: Math.floor((segundos % 3600) / 60)
Segundos restantes: segundos % 60
Formatar como "2h 30min 45s"
*/
function tempoParaTexto(segundosTotais) {
    const horas = Math.floor(segundosTotais / 3600);//quantas vezes dá 3600 resulta em qtd de horas
    const minutos = Math.floor((segundosTotais % 3600) / 60);//restante dos segundos dividido por 60 resulta em qtd de minutos
    const segundos = segundosTotais % 60;//restante dos segundos após calcular horas e minutos
    
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
console.log(tempoParaTexto(3661)); // "1h 1min 1s"
console.log(tempoParaTexto(7200)); // "2h"node
console.log(tempoParaTexto(615783));   // "1min 1s"