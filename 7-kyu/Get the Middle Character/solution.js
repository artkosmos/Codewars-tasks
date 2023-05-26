/*
You are going to be given a word.
Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.*/

function getMiddle(string) {
  const middle = string.length / 2

  if (middle % 2 === 0) {
    return string.slice(middle - 1, middle + 1)
  }
  return string[(Math.floor(middle / 2))]
}

console.log(getMiddle('test'))
console.log(getMiddle("testing"))