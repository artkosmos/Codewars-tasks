/* The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.
 */

function duplicateEncode (word) {
  return word.split('').reduce((result, item, _, array) => {
    let copy = result;
    const symbolQuantity = array.filter((element) => element.toLowerCase() === item.toLowerCase())
    if (symbolQuantity.length > 1) {
      copy += ')'
    } else {
      copy += '('
    }

    return copy
  }, '')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))
console.log(duplicateEncode('(( @'))

// another good decision through comparing indexes

function duplicateCode (word) {
  return word
    .toLowerCase()
    .split('')
    .map((a, i, w) => (w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'))
    .join('');
}

console.log(duplicateCode('din'))
console.log(duplicateCode('recede'))
console.log(duplicateCode('Success'))
console.log(duplicateCode('(( @'))
