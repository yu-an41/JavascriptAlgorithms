// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch (array, value) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + end / 2);

        if (array[mid] > value) {
            end = mid - 1;
        } else if (array[mid] < value) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

function binarySearch (array, value) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor(start + end / 2);

    while (array[mid] !== value && start <= end) {

        if (value < array[mid]) end = mid - 1; 
        else start = mid + 1;
        mid = Math.floor(start + end / 2);
    }
    return (array[mid] === value)? mid : -1;
}