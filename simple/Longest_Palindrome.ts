// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
//
//   Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
//
//   Example 1:
//
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:
//
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.
//
//
// Constraints:
//
//   1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.

function longestPalindrome(s: string): number {
  const seen = new Set();
  let count = 0;

  for(let i=0; i<s.length; i++){
    if(!seen.has(s[i])){
      seen.add(s[i]);
    }else{
      seen.delete(s[i]);
      count+=2;
    }
  }
  return count + (seen.size > 0 ? 1 : 0);
}

// console.log(longestPalindrome('abccccdd')); // dccaccd = 7
console.log(longestPalindrome('bananas')); // 5