// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(s1, s2) {
    if (s2.length < s1.length) return false;
  
    let i = 0;
    let j = 0;
  
    while (j < s2.length) {
      // if i is the last character in s1, return true
      if (i > s1.length -1) return true;
  
      // Check if the first character in s1 = the first character in s2
      if (s1[i] === s2[j]) {
        // if it's equal, move on to the next character in s1
      i++;
  
      }
      // if it's not equal, move on to the next character in s2
      j++;
    }
    // if not able to find the same character in s2, return false
    return false;
  }