/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
   if(str1.length!=str2.length){
    return false;
   }
   let c1={};
   for(let c of str1){
    c1[c]=(c1[c] || 0)+1;
   }
   let c2={};
   for(let c of str2){
    c2[c]=(c2[c] || 0)+1;
   }
       for(let c of s1){
        if(c1[c]!=c2[c]){
          return false;
        }
       }
       return true;
}

module.exports = isAnagram;
