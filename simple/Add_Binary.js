// Given two binary strings a and b, return their sum as a binary string.
//   Example 1:
//
// Input: a = "11", b = "1"
// Output: "100"
// Example 2:
//
// Input: a = "1010", b = "1011"
// Output: "10101"
//
//
// Constraints:
//
//   1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
//   Each string does not contain leading zeros except for the zero itself.

const addBinary = function(a, b) {
    let currentAIndex = a.length - 1
    let currentBIndex = b.length - 1
    const stack = []
    let remember = 0

    while (a[currentAIndex] || b[currentBIndex]) {
        const sum = Number(a[currentAIndex] || 0) + Number(b[currentBIndex] || 0) + remember
        if (sum < 2) {
            stack.push(sum)
            remember = 0
        } else {
            stack.push(sum - 2)
            remember = 1
        }
        currentAIndex--
        currentBIndex--
    }

    if (remember) stack.push(remember)

    return stack.reverse().join('')
};

// console.log(addBinary('1010', '1011')); // 10101
console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011')); // 10101