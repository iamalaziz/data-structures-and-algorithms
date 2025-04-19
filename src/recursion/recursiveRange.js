/**
 * Calculates the sum of all numbers from 0 to n.
 * @param {number} n The number to calculate the sum to.
 * @returns {number} The sum of all numbers from 0 to n.
 */
const recursiveRange = (n) => {
    if (n == 1) return 1;
    return n + recursiveRange(n - 1);
};

console.log(recursiveRange(6));
