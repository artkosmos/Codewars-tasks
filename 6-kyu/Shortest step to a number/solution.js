/*
Given a number, num, return the shortest amount of steps it would take from 1, to land exactly on that number.

Description:
A step is defined as either:

Adding 1 to the number: num += 1
Doubling the number: num *= 2
You will always start from the number 1 and you will have to return the shortest count of steps it would take to land exactly on that number.
*/

function shortestStepsToNum(num) {
  if (num <= 1) {
    return 0;
  }

  let startNumber = 1
  let lowestNumber = num
  let stepCount = 0

  while (lowestNumber !== startNumber) {
    if (lowestNumber % 2 === 0) {
      lowestNumber /= 2
    } else {
      lowestNumber -= 1
    }
    stepCount += 1
  }

  return stepCount;
}

console.log(shortestStepsToNum(12))
console.log(shortestStepsToNum(16))
console.log(shortestStepsToNum(71))