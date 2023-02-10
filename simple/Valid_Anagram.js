// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//
//   An Anagram is a word or phrase formed by rearranging the letters of a
//   different word or phrase, typically using all the original letters exactly once.
//
//   Example 1:
//
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
//
// Input: s = "rat", t = "car"
// Output: false

const isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const sObj = {};
  const tObj = {};

  for (let i = 0, length = s.length; i < length; i++) {
    sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] += 1 : 1;
    tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] += 1 : 1;
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) {
      return false
    }
  }

  return true;
};


// console.log(isAnagram('anagram', 'nagaram')); // true
// console.log(isAnagram('rat', 'car')); // false
console.log(isAnagram('aacc', 'ccac')); // false