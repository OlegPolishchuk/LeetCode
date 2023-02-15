// Given a string s, find the first non-repeating character in it and return
// its index. If it does not exist, return -1
// Example 1:
//
// Input: s = "leetcode"
// Output: 0
// Example 2:
//
// Input: s = "loveleetcode"
// Output: 2
// Example 3:
//
// Input: s = "aabb"
// Output: -1

function firstUniqChar(s: string): number {
  const letterCount: {[key: string]: number} = {};

  for (let i=0; i<s.length; i++) {
   letterCount[s[i]] = letterCount[s[i]] ? letterCount[s[i]] + 1 : 1;
  }

  for (let key in letterCount) {
    if (letterCount[key] === 1) {
      return s.indexOf(key)
    }
  }

  return -1;
}

console.log(firstUniqChar('loveleetcode')); // 2(v)