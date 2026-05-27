//Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1, marcando os números que foram divisíveis por 4, exatamente como mostrado abaixo: 30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]…

let contador = [];
let numero = [];
//"push" é usado para adicionar um ou mais elementos ao final de um array. Ele altera o tamanho original do array e retorna o seu novo comprimento
for (let i = 30; i > 0; i-- ) {
    if (i % 4 === 0) {
        contador.push(`(${i})`);
    } else {
        contador.push(i);
    }
}
alert(contador.join("; "));