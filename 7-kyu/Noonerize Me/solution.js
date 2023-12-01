// You will create a function which takes an array of two positive integers, spoonerizes them, and returns
// the positive difference between them as a single number or 0 if the numbers are equal

function noonerize(numbers) {
  if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number") {
    return "invalid array"
  }

  const first = Number(numbers[1].toString()[0] + numbers[0].toString().slice(1))
  const second = Number(numbers[0].toString()[0] + numbers[1].toString().slice(1))

  if (first > second) {
    return first - second
  }

  return second - first
}

console.log(noonerize([12, 34]))
