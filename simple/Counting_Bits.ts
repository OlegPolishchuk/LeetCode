// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
// Example 1:
//
// Input: n = 2
// Output: [0,1,1]
// Explanation:
//   0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:
//
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
//   0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

function countBits(n: number): number[] {
  let result = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) {
      offset = i;
    }
    result[i] = 1 + result[i - offset];
  }

  return result;
}

console.log(parseInt(`4`, 2))

console.log(countBits(2)); // [0,1,1]