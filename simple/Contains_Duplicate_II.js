// Given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
//
//   Example 1:
//
// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:
//
// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:
//
// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

const containsNearbyDuplicate = function(nums, k) {
  const resultObj = {};

  for (let i = 0, length = nums.length; i < length; i++) {
    if (resultObj[nums[i]]) {
      resultObj[nums[i]].push(i)
    }
    else {
      resultObj[nums[i]] = [i];
    }
  }

  console.log(resultObj)

  for (let key in resultObj) {
    if (resultObj[key].length > 1) {
      for (let i = 0, subArr = resultObj[key]; i < subArr.length; i++ ) {
        if (Math.abs(subArr[i] - subArr[i+1]) <= k) {
          return true
        }
      }
    }
  }

  return false
};


console.log(containsNearbyDuplicate([1,0,1,1], 1)); //true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); //false
