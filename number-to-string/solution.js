// We need a function that can transform a number (integer) into a string.

function numberToString(num) {
  return String(num)
}

// or

function anotherNumberToString(num) {
  return num.toString()
}

console.log(typeof numberToString(15)) // string
console.log(typeof anotherNumberToString(15)) // string
