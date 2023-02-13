// We are playing the Guess Game. The game is as follows:
//
// I pick a number from 1 to n. You have to guess which number I picked.
//
//   Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
//
//   You call a pre-defined API int guess(int num), which returns three possible results:
//
//   -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
//   Return the number that I picked.
//
//   Example 1:
//
// Input: n = 10, pick = 6
// Output: 6
// Example 2:
//
// Input: n = 1, pick = 1
// Output: 1
// Example 3:
//
// Input: n = 2, pick = 1
// Output: 1

const number = 6;

function guess(n: number) {
  if (n < number) return 1;
  if (n > number) return -1;
  return 0;
}
function guessNumber(n: number): number {
  let l = 0;
  let r = n;
  let mid = Math.floor((l + r) / 2);

  while(guess(mid) !== 0){
    if(guess(mid) === 1){
      l = mid + 1;
    }else {
      r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
  }
  return mid;
}


console.log(guessNumber(6));