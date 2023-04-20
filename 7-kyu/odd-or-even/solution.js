/* Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero). */

function oddOrEven(array) {
  if (array.length === 0) {
    return 'even'
  }
  const sumOfNumbers = array.reduce((sum, item) => sum + item, 0)
  if (sumOfNumbers % 2 === 0) {
    return 'even'
  }

  return 'odd'
}

console.log(oddOrEven([0, -1, -5]))
console.log(oddOrEven([1023, 1, 3]))
console.log(oddOrEven([]))
