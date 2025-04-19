/**
 * Sorts an array with `Insertion sorting` algorithm.
 * @param {Array} array An array of numbers to sort.
 * @param {Function} comparator A function to compare two elements.
 * @returns Sorted array.
 */
function insertionSort(array, comparator) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => a - b;
    }

	for (let i = 1; i < array.length; i++) {
		let current = array[i];
		let j = i - 1;
		while (j >= 0 && comparator(current, array[j]) < 0) {
			array[j + 1] = array[j];
			j--;
		}

        array[j + 1] = current;
    }
    return array;
}

console.log(insertionSort([5, 9, 3, 7, 1, 10]));