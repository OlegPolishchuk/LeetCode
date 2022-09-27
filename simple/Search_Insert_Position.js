// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
//
//   You must write an algorithm with O(log n) runtime complexity.
//
//
//
//   Example 1:
//
// Input: nums = [1,3,5,6], target = 5
// Output: 2

const searchInsert = function(nums, target) {
    if (target > nums[nums.length - 1]) return nums.length;
    if (target < nums[0])  return 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
        else {
            let prev = nums[i - 1];

            if (target > prev && target < nums[i]) {
                return i
            }
        }
    }
};

console.log(searchInsert([1,3,5,6], 5)); //2
console.log(searchInsert([1,3,5,6], 2)); //1