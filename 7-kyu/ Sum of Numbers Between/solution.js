// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including
// them and return it. If the two numbers are equal return a or b.
//
// Note: a and b are not ordered!

function getSum(a, b) {
  if (a === b) {
    return a
  }
  if (b < a) {
    const temp = a
    a = b
    b = temp
  }
  const allNumbers = []
  for (let i = a; i <= b; i++) {
    allNumbers.push(i)
  }

  return allNumbers.reduce((acc, item) => acc + item, 0)
}

console.log(getSum(-1, 2))
console.log(getSum(0, -1))