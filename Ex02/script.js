let numeros = [];
for(let i = 0; i < 7; i++) {
    numeros[i] = parseInt(Math.random() * 100);
}
let resultado = "";
for (let i = 0; i < 7; i++) {
    resultado = resultado + numeros[i] + "\n";
}
alert(numeros);