/*
Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be case insensitive. The string can contain any char.*/

function XO(str) {
  const charArray = str.split('')
  const arrayOfX = charArray.filter(item => item.toLowerCase() === 'x')
  const arrayOfO = charArray.filter(item => item.toLowerCase() === 'o')
  return arrayOfX.length === arrayOfO.length
}

console.log(XO('xo'))
console.log(XO("xxxm"))
