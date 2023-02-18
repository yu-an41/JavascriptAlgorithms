// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse (string) {
    if (string.length === 0) return;

    let reverserArr =[];

    function addReverse (string) {
        if (string.length === 0) return;

        reverserArr.push(string[string.length - 1]);

        return addReverse(string.substring(0, string.length -1))
    }

    addReverse(string);

    return reverserArr.join('');
}
