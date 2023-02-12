// Given a string s, reverse only all the vowels in the string and return it.
//
//   The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

//   Example 1:
//
// Input: s = "hello"
// Output: "holle"
// Example 2:
//
// Input: s = "leetcode"
// Output: "leotcede"

const vowels = ['a','e','i','o','u'];
function reverseVowels(s: string): string {
  const arr = s.split('');
  let start = 0;
  let end = s.length - 1;

  while(start < end) {
    if (vowels.includes(arr[start])) {
      const temp = arr[start];
      if (vowels.includes(arr[end])) {
        arr[start] = arr[end];
        arr[end] = temp;

        start += 1;
        end -= 1;
      } else {
        end -= 1;
      }
    } else {
      start += 1;
    }
  }

  return arr.join('')
}

console.log(reverseVowels('leetcode')); // leotcede