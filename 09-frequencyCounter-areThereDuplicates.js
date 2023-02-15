// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// function areThereDuplicates(...args) {
//     // dealing with arguments
//     let argsArr = [...args];
//     let checkDuplicateArr = [];
//     let i = 0;

//     // checking whether there are duplicates
//     // via the frequency counter pattern
//     while (i < argsArr.length) {
//         if(! checkDuplicateArr.includes(argsArr[i])) {
//             checkDuplicateArr.push(argsArr[i]);
//             i++;
//         } else {
//             return true;
//         }
//     }

//     return false;
// }

function areThereDuplicates(...args) {
    let argsArr = [...args];
    let i = 0;

    for (let j = 1; j < argsArr.length; j++) {
        if ( argsArr[i] !== argsArr[j]) {
            i++;
            argsArr[i] = argsArr[j]
        } else {
            return true;
        }
    }

    return false;
}