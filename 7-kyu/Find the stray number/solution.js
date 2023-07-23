/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.*/

function stray(numbers) {
  const result = numbers.reduce((obj, item) => {
    if (obj[item]) {
      obj[item] = obj[item] + 1
    } else {
      obj[item] = 1
    }
    return obj
  }, {})

  for (let key in result) {
    if (result[key] === 1)
      return parseInt(key)
  }
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]))