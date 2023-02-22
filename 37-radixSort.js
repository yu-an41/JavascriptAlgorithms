// radix sort helpers
//getDigit
// function getDigit(num, place) {
//     num = num.toString();
//     let digit = num[num.length - place - 1] || '0';
//     return +digit;
// }

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
getDigit(12345, 0);

//digitCount
// function digitCount(num) {
//     return num.toString().length;
// }

// function digitCount(num) {
//     return Math.ceil(Math.log10(num) % 10);
// }

// instructor's solution
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//mostDigits
// if 判斷
// function mostDigits(array){
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (digitCount(array[i])> count) count = digitCount(array[i]);
//     }
//     return count;
// }

// 老師寫法 Math.max
function mostDigits(array){
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        count = Math.max(count, digitCount(array[i]));
    }
    return count;
}

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, ()=> []);
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])