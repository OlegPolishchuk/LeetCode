// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.
//
//   Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true
// Example 2:
//
// Input: nums = [1,2,3,4]
// Output: false
// Example 3:
//
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
//
//
// Constraints:
//
//   1 <= nums.length <= 105
//   -109 <= nums[i] <= 109

const containsDuplicate = function(nums) {
  const resultObj = {};

  for (let i = 0, length = nums.length; i < length; i++) {
    if (resultObj[nums[i]]) {
      resultObj[nums[i]] += 1;
    }
    else resultObj[nums[i]] = 1;
  }

  for (let key in resultObj) {
    if (resultObj[key] > 1) {
      return true
    }
  }

  return false;
};

// interesting way from leetcode
// var containsDuplicate = function(nums) {
//   const s = new Set(nums)
//   return s.size !== nums.length
// };

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1,2,3,4])); // false