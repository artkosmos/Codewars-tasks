/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  let currentNumber = n

  while (currentNumber > 9) {
    const currentNumberAsArray = currentNumber.toString().split('')

    currentNumber = currentNumberAsArray.reduce((sum, item) => {
      sum = sum + Math.pow(+item, 2)
      return sum
    }, 0)
  }

  return currentNumber === 1 || currentNumber === 7;
};

console.log(isHappy(19))