function naiveSearch (long, pattern) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (j === pattern.length - 1) count++;
            if (long[i] === pattern[j]) {
                i++;
                j++;
            }
        }
        i++;

    }
    return count;
}