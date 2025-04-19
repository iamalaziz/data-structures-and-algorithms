/**
 * Quick Sort
 * 
 * Time Complexity: Common - O(n log n), (O(n^2) - when the pivot is the smallest or largest element)
 * Space Complexity: O(log n)
 * 
 * @param {Array} array The array to sort
 * @param {Function} comparator The comparator function
 * @param {Number} left The left index of the array
 * @param {Number} right The right index of the array
 * @returns {Array} The sorted array
 */
function quickSort(array, comparator = (a, b) => a - b, left = 0, right = array.length - 1) {
    if (left < right) {
        const pivotIndex = pivot(array, comparator, left, right);

        quickSort(array, comparator, left, pivotIndex - 1);
        quickSort(array, comparator, pivotIndex + 1, right);
    }

    return array;
}

// sort in ascending order
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));

// sort in descending order
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3], (a, b) => b - a));

/**
 * Pivot. Helper function to place the pivot element in the correct position.
 * @param {Array} array The array to sort
 * @param {Function} comparator The comparator function
 * @param {Number} start The start index of the array
 * @param {Number} end The end index of the array
 * @returns {Number} The index of the pivot element
 */
function pivot(array, comparator, start = 0, end = array.length - 1) {
    let pivot = array[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (comparator(pivot, array[i]) > 0) {
            swapIdx++;
            // swap
            [array[i], array[swapIdx]] = [array[swapIdx], array[i]]
        }
    }
    // swap the pivot to the right position
    [array[start], array[swapIdx]] = [array[swapIdx], array[start]]

    return swapIdx;
}
