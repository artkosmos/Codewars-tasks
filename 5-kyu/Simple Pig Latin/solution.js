/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str) {
  const ending = 'ay'
  let updatedString;
  return updatedString = str
    .split(' ')
    .map(word => {
      if (word.toLowerCase() === word.toUpperCase()) {
        return word
      }
      return `${word.slice(1)}${word[0]}${ending}`
    })
    .join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This is my string'))
console.log(pigIt('This is my string ! %'))