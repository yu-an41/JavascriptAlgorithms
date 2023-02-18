// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// function reverse (string) {
//     let reverserArr =[];
//     if (string.length === 0) return reverseArr.join('');

//     function addReverse (string) {
//         if (string.length === 0) return;

//         reverserArr.push(string[string.length - 1]);

//         return addReverse(string.substring(0, string.length -1))
//     }

//     addReverse(string);

//     return reverserArr.join('');
// }

function reverse (string) {
    let reverseArr = [];

    if (string.length === 0) return reverseArr.join('');

    reverseArr.push(string[string.length - 1]);
    reverseArr = reverseArr.concat(reverse(string.substring(0, string.length - 1)));

    return reverseArr.join('');

}

reverse('awesome') // 'emosewa'