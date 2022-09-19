const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            let first = nums[i];
            let second = nums[j];

            if ( i !== j && (first + second) === target ) {
                return [i, j]
            }
        }
    }
};

console.log(twoSum([3, 2, 4], 6));