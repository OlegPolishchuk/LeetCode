// Given a string s consisting of words and spaces, return the length of the last word in the string.
//
//   A word is a maximal substring consisting of non-space characters only.

//   Example 1:
//
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

const lengthOfLastWord = function(s) {
    const resultArr = s.trim().split(' ');
    return resultArr[resultArr.length - 1].length
};

// console.log(lengthOfLastWord("Hello World")); // world => 5
// console.log(lengthOfLastWord('   fly me   to   the moon  ')); // moon => 4
console.log(lengthOfLastWord("Today is a nice day")); // 5