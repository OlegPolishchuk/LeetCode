// Given a function fn, return a memoized version of that function.
//
// A memoized function is a function that will never be called twice with the same inputs.
// Instead it will return a cached value.
//
//   fn can be any function and there are no constraints on what type of values it accepts.
//   Inputs are considered identical if they are === to each other.
//
//
//
//   Example 1:
//
// Input:
//   getInputs = () => [[2,2],[2,2],[1,2]]
// fn = function (a, b) { return a + b; }
// Output: [{"val":4,"calls":1},{"val":4,"calls":1},{"val":3,"calls":2}]
// Explanation:
//   const inputs = getInputs();
// const memoized = memoize(fn);
// for (const arr of inputs) {
//   memoized(...arr);
// }
//
// For the inputs of (2, 2): 2 + 2 = 4, and it required a call to fn().
//   For the inputs of (2, 2): 2 + 2 = 4, but those inputs were seen before so no call to fn() was required.
//   For the inputs of (1, 2): 1 + 2 = 3, and it required another call to fn() for a total of 2.

function memoize(fn: Function) {
  const memoizedData = new Map();

  return function(...args: any[]) {
    const key = args;

    if (memoizedData.has(key)) {
      return memoizedData[key]
    }

    const functionOutput = fn(...args);
    memoizedData[key] = functionOutput;

    console.log(memoizedData[key])
    return functionOutput;
  }
}


let callCount = 0;
// const memoizedFn = memoize(function (a: number, b: number) {
//   callCount += 1;
//   return a + b;
// })

// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1


const memoizedFn = memoize(function (a: any, b: any) { return ({...a, ...b}); })

memoizedFn({}, {}) // {} 1
memoizedFn({}, {}) // {} 2
memoizedFn({}, {}) // {} 3
console.log(callCount) // 3