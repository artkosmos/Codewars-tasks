/*
Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0.*/

const summation = (num) => {
  const array = []
  for (let i = 1; i <= num; i++) {
    array.push(i)
  }
  return array.reduce((sum, item) => sum + item)
}

console.log(summation(8))