/* Achar não é roubar

Crie uma função que olhe através do array arr e retorne o primeiro elemento dentro do array que passe pelo 'teste de verdade' ('truth test'). Isso significa que, dado um elemento x, o 'teste de verdade' é verdadeiro se func(x) é true. Se nenhum elemento passa no test, retorna undefined. */

const findElement = (arr, func) => arr.find(func);
