/*
You will be given an array of numbers.
You have to sort the odd numbers in ascending order
while leaving the even numbers at their original positions.*/

function sortArray(array) {
  const arrOfSortOddNumbers = array
    .filter((item) => item % 2 !== 0)
    .sort((a, b) => a - b)

  return array.map((item => {
    if (item % 2 !== 0) {
      item = arrOfSortOddNumbers.shift()
      return item
    }
    return item
  }))
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))