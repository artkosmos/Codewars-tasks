// Your task is to write a function which returns the sum of following series upto nth term(parameter).
// You need to round the answer to 2 decimal places and return it as String.
//
// If the given value is 0 then it should return 0.00
//
// You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
  if (n === 0) return '0.00'
  let result = 0
  let divider = 1
  for (let i = 1; i <= n; i++) {
    result = result + (1 / divider)
    divider += 3
  }
  return result.toFixed(2)
}

console.log(SeriesSum(5))