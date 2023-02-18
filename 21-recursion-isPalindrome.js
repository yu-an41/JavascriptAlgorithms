// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome (string) {
    function isPalindromeHelper (str) {
        if (str.length <= 1) return true;
        if (str[0] !== str[str.length - 1]) return false;
        return isPalindromeHelper(str.substring(1, str.length-1));
    }
    return isPalindromeHelper (string);
}