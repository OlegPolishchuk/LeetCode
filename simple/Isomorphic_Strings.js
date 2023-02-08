// Given two strings s and t, determine if they are isomorphic.
//
//   Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//
//   All occurrences of a character must be replaced with another character while
//   preserving the order of characters. No two characters may map to the same character,
//   but a character may map to itself.
//   Example 1:
//
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
//
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
//
// Input: s = "paper", t = "title"
// Output: true
//
//
// Constraints:
//
//   1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// const isIsomorphic = function(s, t) {
//   const sObj = {};
//   const tObj = {};
//
//   for (let i = 0; i < s.length; i++) {
//     sObj[s[i]] = sObj[s[i]] ? sObj[s[i]] += 1 : 1;
//     tObj[t[i]] = tObj[t[i]] ? tObj[t[i]] += 1 : 1;
//   }
//
//   const sValues = Object.values(sObj);
//   const tValues = Object.values(tObj);
//
//   for (let i = 0; i < sValues.length; i++) {
//     if (sValues[i] !== tValues[i]) return false;
//   }
//
//   return true;
// };

const isIsomorphic = function(s, t) {
  const resultObj = {};

  for (let i = 0; i < s.length; i++) {
    if (!resultObj[s[i]]) {
      resultObj[s[i]] = t[i]
    } else {
      if (resultObj[s[i]] !== t[i]) return false
    }
  }

  const resultValues = Object.values(resultObj);

  for (let i = 0; i < resultValues.length; i++) {
    const item = resultValues[i];

    if (resultValues.indexOf(item) !== resultValues.lastIndexOf(item)) {
      return false;
    }
  }
  return true;
};

console.log(isIsomorphic('egg', 'add')); //true
console.log(isIsomorphic('foo', 'bar')); //false
console.log(isIsomorphic('bbbaaaba', 'aaabbbba')); //false
console.log(isIsomorphic('badc', 'baba')); //false
