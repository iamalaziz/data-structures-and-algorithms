/**
 * Calculates the product of all numbers in an array.
 * @param {number[]} nums The array of numbers.
 * @param {number} i The index of the current number.
 * @returns {number} The product of all numbers in the array.
 */
const productOfArray = (nums, i) => {
    if (i == nums.length) return 1;
    return nums[i] * productOfArray(nums, i + 1);
};

console.log(productOfArray([1, 2, 3, 4], 0));
