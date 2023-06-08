/* Capitalizar a primeira letra de cada palavra de uma frase

Retorne a string fornecida com a primeira letra de cada palavra em letra maiúscula. Certifique-se de que o resto da palavra esteja em letras minúsculas.

Para o propósito desse exercício, você também deve capitalizar as palavras conectoras como the e of. */

const titleCase = str => str.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
