// Power of Two
// Given an integer n, return true if it is a power of two. Otherwise, return false.
//
//   An integer n is a power of two, if there exists an integer x such that n == 2x.
//
//   Example 1:
//
// Input: n = 1
// Output: true
// Explanation: 2^0 = 1
// Example 2:
//
// Input: n = 16
// Output: true
// Explanation: 2^4 = 16
// Example 3:
//
// Input: n = 3
// Output: false
//
//
// Constraints:
//
//   -2^31 <= n <= 2^31 - 1

// it works, but we have better solution
// const isPowerOfTwo = function(n) {
//   if (n === 1) return true;
//   if (n === 2) return true;
//
//   let start = 0, end = 31;
//
//   while(start <= end) {
//     let middle = Math.floor(start + end / 2);
//     let poweredValue = pow(middle);
//
//     if (poweredValue === n) return true;
//     if (end === 2) return false;
//
//     if (poweredValue < n) {
//       start = middle + 1;
//     } else {
//       if (pow(middle - 1) < n) return false;
//
//       end = middle - 1;
//     }
//   }
// };
//
// function pow(pow) {
//   return Math.pow(2, pow)
// }


const isPowerOfTwo = function(n) {
  let start = 0;

  while(2**start < n) {
    start += 1;
  }

  return 2**start === n;
};

// another good solution
// const isPowerOfTwo = function(n) {
//   while (n > 1) {
//     n /= 2;
//   }
//   return (n === 1) ? true : false
// };

console.log(isPowerOfTwo(3)); // true