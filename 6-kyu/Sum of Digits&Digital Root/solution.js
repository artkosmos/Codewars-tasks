/*
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until
a single-digit number is produced. The input will be a non-negative integer.*/

function digitalRoot(number) {
  while (number > 9) {
    number = number
      .toString()
      .split('')
      .reduce((acc, item) => acc + Number(item), 0)
  }
  return number
}

console.log(digitalRoot(456))