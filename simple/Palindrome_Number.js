const isPalindrome = function(x) {
    const arr = x.toString();
    const arrLength = arr.length;
    if (arrLength === 2) {
        return +([first,second] = [arr[1],arr[0]]).join('') === x
    }
    const length = Math.floor(arr.length / 2);
    const result = [...arr]

    for (let i = 0; i < length; i++) {
        const temp  =  result[arrLength-i-1];
        result[result.length-i-1] = result[i];
        result[i] = temp;
    }

    return +result.join('') === x;
};

// console.log(isPalindrome(123));
// console.log(isPalindrome(121));
// console.log(isPalindrome(10));
console.log(isPalindrome(1000030001));