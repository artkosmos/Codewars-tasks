// Count the number of divisors of a positive integer n.
// Random tests go up to n = 500000.

function getDivisorsCnt(n) {
  let counter = 0
  const number = n
  while (n !== 0) {
    if (number % n === 0) {
      counter += 1
    }
    n -= 1
  }
  return counter
}

console.log(getDivisorsCnt(500))