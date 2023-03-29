// Given a string s, return the number of segments in the string.
//
//   A segment is defined to be a contiguous sequence of non-space characters.
//
//   Example 1:
//
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]
// Example 2:
//
// Input: s = "Hello"
// Output: 1

function countSegments(s: string): number {
  if (s === '') {
    return 0
  }

  let trimmedArr = s.trim().split(' ');
  let resultArr = [];

  for (let i = 0, length = trimmedArr.length; i < length; i++) {
    console.log(`trimmedStr =`, trimmedArr)
    if (trimmedArr[i] !== '') {
      resultArr.push(trimmedArr[i])
    }
  }

  return trimmedArr.join('') === '' ? 0 : resultArr.length;
}


// console.log(countSegments('                 '))
console.log(countSegments('Hello, my name is John'))
// console.log(countSegments(', , , ,        a, eaefa'))