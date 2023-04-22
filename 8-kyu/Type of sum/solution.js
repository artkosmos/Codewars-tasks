// Return the type of the sum of the two arguments

const typeOfSum = (a, b) => typeof (a + b)

console.log(typeOfSum(null, undefined))
console.log(typeOfSum('d', 1))
console.log(typeOfSum('s', false))
console.log(typeOfSum(undefined, true))
console.log(typeOfSum(undefined, 're'))
console.log(typeOfSum('dd', ''))
