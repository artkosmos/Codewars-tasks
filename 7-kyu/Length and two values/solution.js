/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.*/

function alternate(n, firstValue, secondValue){
  const result = []
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result.push(firstValue)
    } else {
      result.push(secondValue)
    }
  }

  return result
}

console.log(alternate(10, "blue", "red"))
console.log(alternate(5, true, false))