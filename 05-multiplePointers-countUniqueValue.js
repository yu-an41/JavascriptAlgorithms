// my solution
// function countUniqueValues(arr){
//     let count = 1;
//     let i = 0;
//     if (arr.length) count = 0;
//     while (i !== arr.length-1) {
//         if(arr[i] !== arr[i+1]) {
//           count ++;
//           i++;
//         }
//     }
//     return count;
//   }

// solution
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
countUniqueValues([1,2,2,5,7,7,99])