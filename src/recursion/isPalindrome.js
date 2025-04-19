/**
 * Checks if a string is a palindrome.
 * @param {string} str The string to check.
 * @param {number} order The order of the string.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
const isPalindrome = (str, order = 0) => {
    if (str.length <= 1) return true;
    if (str[0] == str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1));
    } else {
        return false;
    }
};

console.log(isPalindrome('tacocat'));
