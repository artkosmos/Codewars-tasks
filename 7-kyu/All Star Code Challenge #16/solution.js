/*
Create a function called noRepeat() that takes a string argument and returns
a single letter string of the first not repeated character in the entire string.*/

function noRepeat(str) {
  const arrOfLetters = str.split('')
  const uniqueLetters = arrOfLetters.reduce((letter, item, _, array) => {
    const first = array.indexOf(item)
    const last = array.lastIndexOf(item)
    if (first === last) {
      letter += item
    }
    return letter
  }, '')

  return uniqueLetters[0]
}

console.log(noRepeat('aabbccdde'))