// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// via the frequency counter pattern
// function areThereDuplicates(...args) {
//     // dealing with arguments
//     let checkDuplicateArr = [];
//     let i = 0;

//     // checking whether there are duplicates
//     while (i < args.length) {
//         if(! checkDuplicateArr.includes(args[i])) {
//             checkDuplicateArr.push(args[i]);
//             i++;
//         } else {
//             return true;
//         }
//     }

//     return false;
// }

// via the multiple pointers pattern
// function areThereDuplicates(...args) {
//     let i = 0;
//     let j = 1;

//     while (i < args.length - 1) {
//         if(args[i] === args[j]) return true;

//         if (j === args.length - 1) {
//             i++;
//             j = i + 1;
//         }
//     }
//     return false;
// }

// via set