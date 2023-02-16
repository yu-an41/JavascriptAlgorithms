// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, min) {
    if(arr.length === 0) return 0;
    
    let minLen = Infinity;
    
    let i = 0;
    let j = 1;

    let sum = arr[i] + arr[j];

    while (j < arr.length) {
        if (arr[i] >= min || arr[j] >= min) return 1;

        if (sum < min) {
            j++;
            sum += arr[j];
        } else {
            const length = j - i + 1;
            minLen = Math.min(minLen, length);

            sum -= arr[i];
            i++;
        }
    }
    if (minLen === Infinity) return 0; 

    return minLen;
}