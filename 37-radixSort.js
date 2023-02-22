// radix sort helpers
//getDigit
function getDigit(num, place) {
    num = num.toString();
    let digit = num[num.length - place - 1] || '0';
    return +digit;
}

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
getDigit(12345, 0);

//digitCount
function digitCount(num) {
    return num.toString().length;
}

function digitCount(num) {
    return Math.ceil(Math.log10(num) % 10);
}

// instructor's solution
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

