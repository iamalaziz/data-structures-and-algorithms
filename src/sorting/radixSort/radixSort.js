import { getDigit } from './getDigit.js'
import { digitCount } from './digitCount.js'
import { mostDigits } from './mostDigits.js'

/**
 * Sorts an array of numbers using the radix sort algorithm.
 * 
 * Time Complexity: O(nk) - n is the number of elements, k is the number of digits.
 * 
 * Space Complexity: O(n + k) - n is the number of elements, k is the number of digits.
 * 
 * @param {number[]} nums The array of numbers to sort.
 * @returns {number[]} The sorted array.
 */
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))