// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

function averagePair (arr, num) {
    if (arr.length <= 2) return false;

    let i = 0;
    let j = arr.length -1;

    while (i < j) {
		const average = (arr[i] + arr[j])/ 2;
        if (average === num) return true;

        if (average < num) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}