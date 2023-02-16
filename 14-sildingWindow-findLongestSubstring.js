// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring (string) {
    let tempLen = 0;
    let maxLen = 0;
    let stringArr = [];

    if (string.length === 0) return maxLen;

    for (let i = 0; i < string.length; i++) {
        if(! stringArr[string[i]]) {
            stringArr.push(string[i]);
        } else {
            tempLen = stringArr.length;
            maxLen = Math.max(maxLen, tempLen);
            stringArr = [];
        }
    }
    return maxLen;
}