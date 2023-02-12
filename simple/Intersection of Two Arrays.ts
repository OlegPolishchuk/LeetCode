// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
//
//
//   Example 1:
//
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
//
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

function intersection(nums1: number[], nums2: number[]): number[] {
  const res = new Set<number>();

  const shortArr = nums1.length < nums2.length ? nums1 : nums2;
  const longArr = shortArr === nums1 ? nums2 : nums1;

  for (let i = 0,length = shortArr.length; i < length; i++) {
    if (longArr.includes(shortArr[i])) {
      res.add(shortArr[i])
    }
  }

  return [...res]
}

console.log(intersection([4,9,5],[9,4,9,8,4] )); //[4,9]