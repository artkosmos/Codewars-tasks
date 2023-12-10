/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const recentResults = new Map()

  return function (...args) {
    const key = JSON.stringify(args); // or String() for proper comparing

    if (recentResults.has(key)) {
      return recentResults.get(key)
    }
    const result = fn(...args)
    recentResults.set(key, result)

    console.log('fn was called')

    return result
  }
}

const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const memoizedSum = memoize(sum)
const memoizedFac = memoize(factorial)

console.log(memoizedSum(5, 5))
console.log(memoizedSum(5, 5))
console.log(memoizedSum(2, 2))
console.log(memoizedSum(2, 2))

console.log(memoizedFac(2))
console.log(memoizedFac(3))
console.log(memoizedFac(2))
console.log(memoizedFac(0))
console.log(memoizedFac(3))
console.log(memoizedFac(0))