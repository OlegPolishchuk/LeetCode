// Given an integer n, return true if it is a power of four. Otherwise, return false.
//
//   An integer n is a power of four, if there exists an integer x such that n == 4x.
//   Example 1:
//
// Input: n = 16
// Output: true
// Example 2:
//
// Input: n = 5
// Output: false
// Example 3:
//
// Input: n = 1
// Output: true

function isPowerOfFour(n: number): boolean {
  if (n === 1) return true;
  if (n === 0) return false;
  if (n % 2 !== 0) return false;

  while(n % 4 === 0) {
    n = n / 4;
  }

  return n === 1;
}

console.log(isPowerOfFour(16)); //true
console.log(isPowerOfFour(20)); //true
console.log(isPowerOfFour(1)); //true
console.log(isPowerOfFour(0)); //true