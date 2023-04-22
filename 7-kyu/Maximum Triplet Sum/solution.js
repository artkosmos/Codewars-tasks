/* Given an array/list [] of n integers ,
find maximum triplet(most 3 big numbers) sum in the array Without duplications. */

function maxTriSum (numbers) {
  const newArray = numbers.sort((a, b) => (a - b))
  const maxThreeNum = [...new Set(newArray)].slice(-3)
  return maxThreeNum.reduce((sum, item) => sum + item, 0)
}

console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]))
