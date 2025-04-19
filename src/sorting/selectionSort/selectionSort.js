/**
 * Sorts an array with `Selection sorting` algorithm.
 * @param {Array} array An array of numbers to sort.
 * @param {function} comparator A function that compares two values.
 * @returns Sorted array.
 */
function selectionSort(array, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            return a - b;
        };
    }

    for (let i = 0; i < array.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < array.length; j++) {
            if (comparator(array[j], array[minIdx])) {
                minIdx = j;
            }
        }

        if (i !== minIdx) {
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }

    return array;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
console.log(selectionSort([7, 6, 5, 9, 4, 3, 21], (a, b) => a > b));
