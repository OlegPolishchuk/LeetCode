// Write a function to find the longest common prefix string amongst an array of strings.
//
//     If there is no common prefix, return an empty string "".
//     Example 1:
//
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const longestCommonPrefix = function(strs) {

    let longestPrefix = strs[0];
    if(!longestPrefix.length) return ""
    for(let i=1; i<strs.length; i++){
        const currentStr = strs[i];
        let pointer = 0;
        if(longestPrefix !== currentStr){
            while(longestPrefix.charAt(pointer) === currentStr.charAt(pointer)){
                pointer++;
            }
            longestPrefix = longestPrefix.substring(0, pointer);
        }
    }
    return longestPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));