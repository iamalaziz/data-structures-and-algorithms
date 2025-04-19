/**
 * Merges two arrays.
 * @param {Array} arr1 An array of numbers to merge.
 * @param {Array} arr2 An array of numbers to merge.
 * @param {Function} comparator A function to compare two elements.
 * @returns Merged array.
 */
const merge = (arr1, arr2, comparator) => {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }

    let i = 0,
        j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (comparator(arr1[i], arr2[j]) > 0) {
            result.push(arr2[j]);
            j++;
        } else {
            result.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
};

// console.log(merge([1, 10, 50], [1, 2, 14, 99, 100]));

/**
 * Sorts an array with `Merge sorting` algorithm.
 *
 * Time complexity: O(n log n)
 *
 * Space complexity: O(n)
 *
 * @param {Array} arr An array of numbers to sort.
 * @param {Function} comparator A function to compare two elements.
 * @returns Sorted array.
 */
const mergeSort = (arr, comparator) => {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }

    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid), comparator);
    let right = mergeSort(arr.slice(mid), comparator);
    return merge(left, right, comparator);
};

console.log(mergeSort([1, 10, 50, 1, 2, 14, 99, 100]));
