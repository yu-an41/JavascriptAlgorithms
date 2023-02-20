// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// function flatten (arr) {
//     return arr.flatMap(arr => arr);
// }

// function flatten(array) {
//     let flatArr = [];

//     function flattenHelper(arr) {
//         if (arr.length === 0) return flatArr;
//         if (Array.isArray(arr[0])) {
//             return flattenHelper(arr.flat());
//         } else {
//             flatArr.push(arr[0]);
//             return flattenHelper(arr.slice(1));
//         }
//     }
//     flattenHelper(array);
//     return flatArr;
// }

function flatten(array) {
    let flatArr = [];

    function flattenHelper(arr) {
        if (arr.length === 0) return flatArr;
        arr.forEach(value => {

            if (Array.isArray(value)){
                return flattenHelper(value[0]);
            } else {
                flatArr.push(value);
                return flattenHelper(arr.slice(1))
            }
        })
    }
    flattenHelper(array);
    return flatArr;
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]