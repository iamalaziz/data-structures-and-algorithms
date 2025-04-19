/**
 * Sorts an array with `Bubble sorting` algorithm.
 * @param {Array} array An array of numbers to sort.
 * @param {function} comparator A function that compares two values.
 * @returns Sorted array.
 */
function bubbleSort(array, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (comparator(array[j], array[j + 1])) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }

    return array;
}

console.log(bubbleSort([34, 22, 10, 19, 17]));
console.log(bubbleSort([7, 6, 5, 9, 4, 3, 21], (a, b) => a > b));
