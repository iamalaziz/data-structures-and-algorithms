/**
 * Count the number of digits in a number.
 * 
 * @param {number} num The number to count the digits of.
 * @returns {number} The number of digits in the number.
 */
export function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}


// console.log(digitCount(12345)); // 5
// console.log(digitCount(123456789)); // 9 