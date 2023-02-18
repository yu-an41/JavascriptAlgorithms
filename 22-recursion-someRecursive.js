// Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

function isOdd(num){
    if(num % 2 === 0) return false;
    if(num % 2 !== 0) return true;
}

function someRecursive(arr, cb) {
    if (arr.length === 0) return false;

    if(cb(arr[0])) {
        return true;
    } else {
        return someRecursive(arr.slice(1), cb);
    }
}

someRecursive([1,2,3,4], isOdd)