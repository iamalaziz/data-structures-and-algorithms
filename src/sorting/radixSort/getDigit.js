/**
 * Get the digit at a specific place in a number.
 * @param {number} num The number to get the digit from.
 * @param {number} i The place to get the digit from.
 * @returns {number} The digit at the specified place.
 */
export function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(12345, 0)) // 5
// console.log(getDigit(12345, 1)) // 4
// console.log(getDigit(12345, 2)) // 3
// console.log(getDigit(12345, 3)) // 2
// console.log(getDigit(12345, 4)) // 1
// console.log(getDigit(12345, 5)) // 0