/* Truncar uma string

Trunque uma string (primeiro argumento) se ela for maior que o comprimento máximo da string (segundo argumento). Retorne a string truncada com ... (reticências) ao final. */

const truncateString = (str, num) => {
    if (num >= str.length) { return str }

    return str.slice(0, num) + "...";
}
