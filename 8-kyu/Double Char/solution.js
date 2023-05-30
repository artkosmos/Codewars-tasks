/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.*/

function doubleChar(str) {
  return str.split('').reduce((acc, item) => acc + item.repeat(2), '')
}

console.log(doubleChar("String"))