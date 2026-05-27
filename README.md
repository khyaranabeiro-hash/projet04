# 📘 README - Atividades de Vetores em JavaScript

## 📖 Sobre

Este projeto contém 4 atividades desenvolvidas em JavaScript utilizando:

* Vetores (`[]`)
* Repetição (`for`)
* Condições (`if`)
* Números aleatórios
* Contadores
* Remoção de duplicados

---

# 📌 Atividade 01 - Soma dos números pares

## 📝 Objetivo

Ler 10 números inteiros, armazenar em um vetor e calcular a soma apenas dos números pares.

## 💻 Código

```javascript
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
```

## ⚙️ Conceitos utilizados

* Vetores
* Estrutura de repetição `for`
* Condicional `if`
* Operador `%`
* Soma acumulativa

---

# 📌 Atividade 02 - Números aleatórios

## 📝 Objetivo

Gerar automaticamente 7 números aleatórios e armazenar em um vetor.

## 💻 Código

```javascript
let numeros = [];

for(let i = 0; i < 7; i++) {

    numeros[i] = parseInt(Math.random() * 100);

}

let resultado = "";

for (let i = 0; i < 7; i++) {

    resultado = resultado + numeros[i] + "\n";

}

alert(numeros);
```

## ⚙️ Conceitos utilizados

* Vetores
* `Math.random()`
* `parseInt()`
* Repetição `for`

---

# 📌 Atividade 03 - Contagem de números

## 📝 Objetivo

Solicitar 10 números ao usuário e verificar quantas vezes um número específico aparece no vetor.

## 💻 Código

```javascript
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
```

## ⚙️ Conceitos utilizados

* Vetores
* Contador
* Comparação
* Estrutura `if`
* Estrutura `for`

---

# 📌 Atividade 04 - Removendo duplicados

## 📝 Objetivo

Ler 10 números inteiros e criar um novo vetor sem valores repetidos.

## 💻 Código

```javascript
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
```

## ⚙️ Conceitos utilizados

* Vetores
* Vetor auxiliar
* Comparação
* Repetição aninhada
* Remoção de duplicados

---

# 🚀 Tecnologias utilizadas

* JavaScript
* Prompt
* Alert
* Console do navegador

---

# 👩‍💻 Autora

Desenvolvido por Khyara Liz 💙

---

<p align="center">
  <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWVyam5mOHpjZjZodW5lbmNrZ2N0a2hhNXJleTZnaHFoOTNtb2JuYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif">
</p>
