/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();

    const vowels = 'aeiou';

    let count = 0;

    //iterating
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
}

module.exports = countVowels;