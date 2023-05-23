/*
Write a method that takes an array of consecutive (increasing)
letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing.
The length of the array will always be at least 2.
The array will always contain letters in only one case.*/

function findMissingLetter(array) {
  const charCodeArr = array.map(item => item.charCodeAt(0))
  let sum = 0
  for (let i = charCodeArr[0]; i <= charCodeArr.at(-1); i++) {
    sum += i
  }
  const codeOfMissingChar = sum - charCodeArr.reduce((acc, item) => acc + item)

  return String.fromCharCode(codeOfMissingChar)
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']))
