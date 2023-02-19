// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings (obj) {
    let values = Object.keys(obj);
    let array = [];

    values.forEach(value => {
        if (typeof value === 'string') {
            array.push(value);
        }
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            array.concat(collectStrings(value));
        }
})
return array;
}