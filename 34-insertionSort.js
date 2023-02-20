function insertionSort (array) {
    for (let i = 0; i < array.length; i++) {
        let currentVal = array[i];

        for (let j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = currentVal;
    }

    return array;
}