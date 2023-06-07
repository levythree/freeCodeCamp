/* Retornar os maiores números em arrays

Retorna um array que consiste no maior número de cada sub-array fornecido. Por simplicidade, o array fornecido conterá exatamente 4 sub-arrays.

Lembre-se: você pode iterar através de um array com um loop simples, e acesse cada membro com a sintaxe de array arr[i]. */

const largestOfFour = arr => {
    const numArr = [];

    for (const array of arr) { numArr.push(Math.max(...array)); }

    return numArr;
}
