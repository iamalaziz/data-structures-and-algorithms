/**
 * Calculates the nth number in the Fibonacci sequence.
 * @param {number} n The position in the Fibonacci sequence.
 * @returns {number} The nth number in the Fibonacci sequence.
 */
const getFibonacci = (n) => {
    if (n <= 2) return 1;
    return getFibonacci(n - 1) + getFibonacci(n - 2);
};

console.log(getFibonacci(4));
