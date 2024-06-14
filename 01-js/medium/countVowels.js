/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  str = str.toLowerCase(); // Convert the string to lowercase and assign it back
  let count = 0;
  for (let char of str) { // Iterate over each character in the string
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
          count = count + 1; // Increment count when a vowel is found
      }
  }
  return count;
}


module.exports = countVowels;