// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent) { 
    if (exponent === 0) return 1;
    
    function powerUp (count) {
        if (count === exponent) return base;
        return base * powerUp(count+1);
    }

    let result = powerUp(1);
    return result;
}

// pure recursion
function power(base, exponent) {
    if (exponent === 0) return 1;

    if (exponent === 1) return base;
    return base * power(base, exponent - 1);
}