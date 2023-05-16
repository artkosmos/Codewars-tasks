/*
Write a function getMean that takes as parameters an array (arr) and 2 integers (x and y).
The function should return the mean between the mean of the the first x elements of the array
and the mean of the last y elements of the array.

The mean should be computed if both x and y have values higher than 1 but less or equal to the array's length.
Otherwise, the function should return -1.
*/

function getMean(arr, x, y) {
  if (x > 1 && x <= arr.length && y > 1 && y <= arr.length) {
    const secondNumbersArr = arr.slice(-y)
    const firstNumbersArr = arr.slice(0, x)
    const averageFirstNumbers = firstNumbersArr.reduce((acc, item) => acc + item, 0)
    const averageSecondNumbers = secondNumbersArr.reduce((acc, item) => acc + item, 0)
    return ((averageFirstNumbers / x) + (averageSecondNumbers / y)) / 2
  }
  return -1
}

console.log(getMean([26, 95, 36, 93, 32, 29, 21, 63, 34, 63, 47, 54, 77, 6, 6, 88, 8, 37, 36, 61, 49, 41, 82, 36, 29, 25, 86, 0, 74, 1, 77, 99, 67, 38, 87, 39, 17, 76, 93, 7, 51, 14, 76, 45, 86, 63, 26, 83, 23, 6, 7, 57, 31, 18, 98, 47, 98, 45, 9, 13, 57, 36, 16, 0, 92, 52], 10, 7))
console.log(getMean([1, 3, 2], 2, 2))
console.log(getMean([1, 3, 2, 4], 1, 2))
console.log(getMean([1, 3, 2, 4], 2, 8))