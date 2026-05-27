let numeros = [];
let soma = 0;

for (let i = 0; i < 10; i++) {
numeros[i] = parseInt(prompt("Digite seu número inteiro:"));
}
for (let i = 0; i < 10; i++) {
if (numeros[i] % 2 === 0) {
soma = soma + numeros[i];
    }
}
alert("Soma dos números pares: " + soma);