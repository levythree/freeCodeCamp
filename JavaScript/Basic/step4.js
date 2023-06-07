/* Encontrar a palavra mais longa em uma string

Retornar o comprimento da palavra mais longa na frase fornecida.

Sua resposta deve ser um número. */

const findLongestWordLength = str => Math.max(...str.split(" ").map(palavra => palavra.length));
