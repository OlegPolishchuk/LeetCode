// Given a function fn, return a memoized version of that function.
//
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
//
//   You can assume there are 3 possible input functions: sum, fib, and factorial.
//
//   sum accepts two integers a and b and returns a + b.
//   fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
//   factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
//
//
//   Example 1:
//
// Input
// "sum"
//   ["call","call","getCallCount","call","getCallCount"]
//   [[2,2],[2,2],[],[1,2],[]]
// Output
//   [4,4,1,3,2]
//
// Explanation
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // Returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // Returns 4. However sum() was not called because the same inputs were seen before.
// // Total call count: 1
// memoizedSum(1, 2); // Returns 3. sum() was called as (1, 2) was not seen before.
// // Total call count: 2

type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
  const cacheObject: Record<string, any> = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    
    if (key in cacheObject) {
      return cacheObject[key];
    }
    
    const functionOutput = fn(...args);
    cacheObject[key] = functionOutput;
    return functionOutput;
  }
}


/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */