// Pivot Helper
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap =(arr, idx1, idx2) => [arr[ixd1], arr[idx2]] = [arr[idx2], arr[idx1]];

    // Assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the start and end elements
    swap(arr, start, i);
    return swapIdx;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
quickSort([4, 6, 9, 1, 2, 5, 3]);
