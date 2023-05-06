/*
Create a function named divisors/Divisors that takes an integer n > 1
and returns an array with all the integer's divisors' +
'(except for 1 and the number itself), from smallest to largest.
'If the number is prime return the string '(integer) is prime'*/

function divisors(integer) {
  const divisorsArr = []
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divisorsArr.push(i)
    }
  }
  if (divisorsArr.length === 0) {
    return `${integer} is prime`
  }
  return divisorsArr
}

console.log(divisors(13))
console.log(divisors(12))
console.log(divisors(15))