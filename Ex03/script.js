let numeros = [];
let contador = 0;

for(let i = 0; i < 10; i++) {
    numeros[i] = parseInt(prompt("Digite um número: "));

}

let numeroDigitado = parseInt(prompt("Digite um número para encontror: "));

for(let i = 0; i < 10; i++) {
    if(numeros[i] == numeroDigitado) {
        contador++;

    }
}
alert("O número apareceu " + contador + " vezes");