/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  num1 = str1.length;
  num2 = str2.length;

  if (num1 != num2) {
    return false;
  }

  rearrangedStr1 = str1.toLowerCase().split('').sort().join('');
  rearrangedStr2 = str2.toLowerCase().split('').sort().join('');


  return rearrangedStr1 === rearrangedStr2;

}

//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   // going through every letter
//   for ( let char of str1) {

//     if ( str2.indexOf(char) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

module.exports = isAnagram;
