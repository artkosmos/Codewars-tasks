/*
Create a function that returns the sum of the two lowest positive numbers given an array
of minimum 4 positive integers. No floats or non-positive integers will be passed.*/

function sumTwoSmallestNumbers(numbers) {
  const numbersCopy = [...numbers]
  const firstMinNum = numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbersCopy)), 1)
  const secondMinNum = numbersCopy.splice(numbersCopy.indexOf(Math.min(...numbersCopy)), 1)

  return [...firstMinNum, ...secondMinNum].reduce((acc, item) => acc + item)
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))
