// my solution
// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let anagramObj1 = {};
//   let anagramObj2 = {};
//   for (let val of str1) {
//     anagramObj1[val] = (anagramObj1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     anagramObj2[val] = (anagramObj2[val] || 0) + 1;
//   }
//   for (let key in anagramObj1) {
//     if (!(key in anagramObj2)) {
//       return false;
//     }
//     if (anagramObj2[key] !== anagramObj1[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// solution
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
