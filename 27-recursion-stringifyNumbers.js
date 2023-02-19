// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

function stringifyNumbers (object) {
    let keys = Object.keys(object);
    let strObj = Object.assign({}, object);

    keys.forEach(key => {
        let value = strObj[key];
        if (typeof value === 'number') strObj[key] = value.toString();
        if (typeof value === 'object' && !Array.isArray(value)) {
            strObj[key] = stringifyNumbers(value);
        }
    })

    return strObj;
}

stringifyNumbers(obj)