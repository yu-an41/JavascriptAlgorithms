// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

function maxSubarraySum (arr, num) {
    if (arr.length < num) return null;

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = 0; i < (arr.length - num); i++) {
        tempSum = tempSum - arr[i] + arr[i + num];
        maxSum = Math.max(maxSum, tempSum);
    }

	// 也可以改用i = num 開始跑
    // for (let i = num; i < arr.length; i++) {
    //     tempSum = tempSum - arr[i - num] + arr[i];
    //     maxSum = Math.max(maxSum, tempSum);
    // }

    return maxSum;
}