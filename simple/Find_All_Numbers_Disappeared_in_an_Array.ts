// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.
//
//   Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
//
// Input: nums = [1,1]
// Output: [2]

function findDisappearedNumbers(nums: number[]): number[] {
  const sortedNums = nums.sort((a,b) => a - b);
  const max = sortedNums[sortedNums.length - 1];
  const numsSet = new Set(sortedNums);
  const result = [];

  for (let i = 1, length = nums.length; i <= length; i++ ) {
    if (!numsSet.has(i)) {
      result.push(i)
    }
  }

  return result
}

// console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))
console.log(findDisappearedNumbers([1,1]))