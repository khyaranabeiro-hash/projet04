let numeros = [];
let semDuplicados = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt("Digite seu número inteiro: "));
    numeros[i] = num;
}
for (let i = 0; i < 10; i++) {
    let repetido = false;
    for (let j = 0; j < semDuplicados.length; j++) {
        if (numeros[i] === semDuplicados[j]) {
            repetido = true;
        }
    }
    if (repetido === false) {
        semDuplicados[semDuplicados.length] = numeros[i];
    }
}
alert("Vetor original: " + numeros);
alert("Vetor sem duplicados: " + semDuplicados);