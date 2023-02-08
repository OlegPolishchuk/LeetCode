// Given an array nums of size n, return the majority element.
//
//   The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
//
//   Example 1:
//
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
//
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
//
//
// Constraints:
//
//   n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
//
//
// Follow-up: Could you solve the problem in linear time and in O(1) space?

const majorityElement = function(nums) {
  const numsObj = {};

  for (let i = 0, length = nums.length; i < length; i++) {
    if (numsObj[nums[i]]) numsObj[nums[i]] += 1;
    else numsObj[nums[i]] = 1;
  }

  console.log(numsObj)
  const prop = Object.values(numsObj).sort((a,b) => b - a)[0];

  for (let key in numsObj) {
    if (numsObj[key] === prop) return key
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); //2