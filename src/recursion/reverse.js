/**
 * Reverses a string using recursion.
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
const getReverse = (str) => {
    if (str.length <= 1) return str;
    return getReverse(str.slice(1)) + str[0];
};

console.log(getReverse('abc'));
