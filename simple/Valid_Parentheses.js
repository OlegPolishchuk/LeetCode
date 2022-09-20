// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.
//
//
//     Example 1:
//
// Input: s = "()"
// Output: true

const isValid = function(s) {
    const half = s.length / 2;
    let res = s;

    for (let i = 0; i < half; i++) {
        res = res.replace('()', '');
        res = res.replace('[]', '');
        res = res.replace('{}', '')
    }

    return res === ''
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
// console.log(isValid('([)]')); // false
// console.log(isValid("{[]}")); // true