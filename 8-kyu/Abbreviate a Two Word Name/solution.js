/* Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.
 */

function abbrevName(name) {
  return name
    .split(' ')
    .map((item) => item.slice(0, 1).toUpperCase())
    .join('.')
}

console.log(abbrevName('Patrick Feenan'))
console.log(abbrevName('David Mendieta'))
