// You have n coins and you want to build a staircase with these coins.
// The staircase consists of k rows where the ith row has exactly i coins.
// The last row of the staircase may be incomplete.
//
//   Given the integer n, return the number of complete rows of the staircase you will build.

function arrangeCoins(n: number): number {
  const d = 8*n + 1;
  const res = Math.floor((-1 + d**0.5)/2);
  return res;
};