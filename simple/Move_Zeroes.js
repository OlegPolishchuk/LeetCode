// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
// Note that you must do this in-place without making a copy of the array.
//
//   Example 1:
//
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
//
// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
  for (let i = 0, length = nums.length; i < length; i++) {
    for (let j = 0; j < length; j++) {

      if (nums[j] === 0) {

        if (j === length - 1) continue;
        // console.log('nums[j] = ', nums[j])
        console.log(`nums = `, nums)
        console.log(`j = `, j)
        const temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp;

        console.log(`nums after moving = `, nums)
      }
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0];
// console.log(moveZeroes([1, 0, 0, 3, 12])); // [1,3,12,0,0];
// console.log(moveZeroes([1, 0, 0, 3, 12])); // [1,3,12,0,0];
// console.log(moveZeroes([1, 0, 0, 3, 12])); // [1,3,12,0,0];