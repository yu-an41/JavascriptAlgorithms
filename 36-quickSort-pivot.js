// Pivot Helper
function pivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, i);
    return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);