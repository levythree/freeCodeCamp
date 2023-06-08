/* Fatiar e emendar

Você está recebendo dois arrays e um índice.

Copie cada elemento da primeira matriz para a segunda matriz, em ordem.

Comece inserindo elementos no índice n do segundo array.

Retorne o array resultante. Os arrays recebidos devem permanecer os mesmos após a função ser executada. */

const frankenSplice = (arr1, arr2, n) => [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
