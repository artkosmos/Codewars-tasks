/* Given an array of integers , Find the minimum sum which is obtained
from summing each Two(minimal adn maximum) integers products. */

function minSum (arr) {
  const usedNumbers = []
  while (arr.length > 0) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    const multiplication = min * max
    usedNumbers.push(multiplication)
    arr.splice(arr.indexOf(min), 1)
    arr.splice(arr.indexOf(max), 1)
  }
  return usedNumbers.reduce((result, item) => result + item, 0)
}

console.log(minSum([9, 2, 8, 7, 5, 4, 0, 6]))
