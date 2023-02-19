// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst (array) {
    let capArr = [];
    function capitalizeHelper (arr) {
        if (arr.length === 0) return arr;

        let first = arr[0];
        first = (first[0].toUpperCase()).concat(first.slice(1));

        capArr.push(first);

        return capitalizeHelper(arr.slice(1))
    }
    capitalizeHelper(array);
    return capArr;

}