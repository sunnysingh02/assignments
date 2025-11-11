/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.lenght !== str2.lenght) return false;
  str1= str1.toLowerCase().split("").sort().join("");
  str2= str2.toLowerCase().split("").sort().join("");
  if(str1 === str2){
    return true;
  }
  
}
let result=isAnagram("baby", "ybab");
console.log(result);

module.exports = isAnagram;
