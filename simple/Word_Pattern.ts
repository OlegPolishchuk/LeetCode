// Given a pattern and a string s, find if s follows the same pattern.
//
//   Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
//
//   Example 1:
//
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:
//
// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:
//
// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

type ResObj = {[key: string]: string}
function wordPattern(pattern: string, s: string): boolean {
  let obj: ResObj = {};
  const sArr = s.split(" ");
  if(pattern.length !== sArr.length) return false;

  for(let i=0; i<pattern.length; i++){
    if(!obj[pattern[i]]) obj[pattern[i]] = sArr[i];

    else if (obj[pattern[i]] !== sArr[i]) {
      return false
    }
  }

  let obj2: ResObj = Object.create(null);
  for(let i=0; i<pattern.length; i++){
    if(!obj2[sArr[i]]) {
      obj2[sArr[i]] = pattern[i]
    }

    else if (obj2[sArr[i]] !== pattern[i]) {
      return false
    }
  }

  return true
}

// console.log(wordPattern('abba', 'dog cat cat dog')); // true
// console.log(wordPattern('abba', 'dog cat cat fish')); // false
// console.log(wordPattern('abba', 'dog dog dog dog')); // false
// console.log(wordPattern('ab', 'happy hacking')); // true
// console.log(wordPattern('aba', 'dog cat cat')); // false
// console.log(wordPattern('abab', 'dog cat cat dog')); // false
console.log(wordPattern('abba', 'dog constructor constructor dog')); // false

