import { digitCount } from "./digitCount.js";

/**
 * Get the number of digits in the largest number in an array.
 * @param {number[]} array The array to get the largest number of digits from.
 * @returns {number} The number of digits in the largest number in the array.
 */
export function mostDigits(array){
    let max = 0;
    for(let n of array){
        max = Math.max(max, digitCount(n));
    }
    return max;
}

// console.log(mostDigits([1234, 34, 1, 42421, 345])); // 5