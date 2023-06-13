// [1,2,3,4,5], n=6 => [[0,4], [1,3]]

function findIndex(arr, n) {
  let left = 0;
  let right = arr.length - 1;

  while(left <= right && right) {
    console.log('left = ', left);
    console.log('right = ', right);
    console.log(arr[left] + arr[right])
    console.log('n = ', n)
    console.log(arr[left] + arr[right] === n)

    // if (left === right && right !== arr.length - 1) {
    //   right += 1
    // }

    if (arr[left] + arr[right] === n) {
      console.log('arr[left] + arr[right] === n')
      return [left, right];
    }

    if (arr[left] + arr[right] > n) {
      // console.log('arr[left] + arr[right] > n')
      right -= 1;
    }
    if (arr[left] + arr[right] < n) {
      // console.log('< n' )
      left += 1;
    }
  }

  return false;
}

// console.log(findIndex([1,2,3,4,5], 6))
console.log(findIndex([-1, 0, 1, 4,0], 0))