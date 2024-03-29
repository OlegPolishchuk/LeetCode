// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
//
//   A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
//
//   The provided callback fn will accept an item in the array and return a string key.
//
//   The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
//
//   Please solve it without lodash's _.groupBy function.
//
// Example 1:
//
// Input:
//   array = [
//     {"id":"1"},
//     {"id":"1"},
//     {"id":"2"}
//   ],
//     fn = function (item) {
//       return item.id;
//     }
// Output:
// {
//   "1": [{"id": "1"}, {"id": "1"}],
//   "2": [{"id": "2"}]
// }

interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function(fn) {
  const res: Record<string, any[]> = {}

  this.forEach(item => {
    const resCb = fn(item)

    if (!res[resCb]) {
      res[resCb] = [];
    }

    return res[resCb].push(item)
  })


  return res
}


console.log([1,2,3].groupBy(String))
