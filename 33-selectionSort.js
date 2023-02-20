function selectionSort (array) {
    const swap =  (array, idx1, id2) => ([array[idx1], array[idx2]] = [array[idx2], array[idx1]])
    
    for (let i = 0; i < array.length; i++) {
        let lowest = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[lowest]) lowest = j;
        }
        if (i !== lowest) swap(array, i, lowest);
    }
    return array;
}

selectionSort([2, 5, 4, 10]);