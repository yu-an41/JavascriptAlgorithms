// radix sort helpers
function getDigit(num, place) {
    num = num.toString();
    let digit = num[num.length - place - 1] || '0';
    return +digit;
}


getDigit(12345, 0);