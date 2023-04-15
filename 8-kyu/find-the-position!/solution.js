/* When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1" */

function position(letter) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const letterIndex = alphabet.indexOf(letter)
  return `Position of alphabet: ${letterIndex + 1}`
}

console.log(position('z'))
console.log(position('e'))
