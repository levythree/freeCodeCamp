/* Encontrar o fatorial de um número

Retorne o fatorial do inteiro fornecido.

Se o inteiro é representado com a letra n, o fatorial é o produto de todos os inteiros positivos menores ou iguais a n.

Fatoriais são frequentemente representados com a notação abreviada n!

Por exemplo: 5! = 1 * 2 * 3 * 4 * 5 = 120

Apenas números inteiros maiores ou iguais a zero serão fornecidos para a função. */

const factorialize = num => {
    if (num == 0) {
        return 1;
    }
    
    return num * factorialize(num - 1);
}
