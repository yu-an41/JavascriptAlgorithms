// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(num1, num2) {
    num1 = `${num1}`;
    num2 = `${num2}`;

    let frequency = {};

    if(num1.length !== num2.length) return false;


        for(let i = 0; i < num1.length; i++) {
            frequency[num1[[i]]] ? frequency[num1[[i]]] += 1 : frequency[num1[[i]]] = 1;
        }
        for (let i = 0; i < num2.length; i++) {
            if(! frequency[num2[i]]) {
                return false;
            } else {
                frequency[num2[i]] -= 1
            }
        }
    return true;
}
sameFrequency(575, 755);
