/* Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar.
Always return a positive decimal part. */

function getDecimal (number) {
  return Math.abs(number % 1)
}

console.log(getDecimal(-1.2))
console.log(getDecimal(10))
