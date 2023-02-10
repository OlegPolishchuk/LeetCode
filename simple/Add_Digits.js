// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
//
//   Example 1:
//
// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2
// Since 2 has only one digit, return it.
//   Example 2:
//
// Input: num = 0
// Output: 0

const addDigits = (num) => {
  const numArr = num.toString().split('');

  if (numArr.length === 1) return num;

  const newNum = numArr.reduce((a,b) => {
    return a + Number(b)
  }, 0)

  return addDigits(newNum)
}


console.log(addDigits(38)); // 2