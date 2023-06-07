/* Confirmar o final

Verifique se uma string (primeiro argumento, str) termina com a sequência de caracteres de destino fornecida (segundo argumento, target).

Este desafio pode ser resolvido com o método .endsWith(), que foi introduzido na ES2015. Para este desafio, entretanto, gostaríamos que você usasse um dos métodos de substring JavaScript. */

const confirmEnding = (str, target) => str.slice(- target.length) === target;
