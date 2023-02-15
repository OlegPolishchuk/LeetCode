// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
//
//   Each letter in magazine can only be used once in ransomNote.
//
//   Example 1:
//
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
//
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
//
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function canConstruct(ransomNote: string, magazine: string): boolean {
  const count: {[key: string]: number} = {};

  for (let i = 0, length = magazine.length; i < length; i++) {
    count[magazine[i]] = count[magazine[i]] ? count[magazine[i]] + 1 : 1;
  }

  for (let i = 0, length = ransomNote.length; i < length; i++) {
    if (!count[ransomNote[i]]) return false;

    count[ransomNote[i]]--;
  }

  return true;
}

console.log(canConstruct('aa', 'aab'));

