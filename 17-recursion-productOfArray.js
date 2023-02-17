// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// function productOfArray (array) {
//     let product = 1;

//     for (let i = 0; i < array.length; i++) {
//         product *= array[i];
//     }
//     return product;
// }

function productOfArray (array) {

    if (array.length == 0) return 0;    
    if (array.length === 1) return array[0];

    return array[0] * productOfArray(array.slice(1));
}

