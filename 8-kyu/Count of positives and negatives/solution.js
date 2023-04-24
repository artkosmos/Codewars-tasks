/* eslint-disable no-return-assign */

/* Given an array of integers.
Return an array, where the first element is the count of positives 
numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */

function countPositivesSumNegatives(input) {
  let positive = 0
  let negative = 0
  if (input === null || input.length < 1) return []
  input.forEach((item) => (item > 0 ? positive++ : (negative += item)))
  return [positive, negative]
}

console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
)
