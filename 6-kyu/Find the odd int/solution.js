/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.*/

function findOdd(array) {
  let oddNumberOfTimes
  const quantityObj = array.reduce((acc, item) => {
    if (acc[item]) {
      acc[item] += 1
    } else {
      acc[item] = 1
    }
    return acc
  }, {})

  for (let key in quantityObj) {
    if (quantityObj[key] % 2 !== 0) {
      oddNumberOfTimes = key
    }
  }
  return Number(oddNumberOfTimes)
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
