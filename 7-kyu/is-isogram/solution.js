function isIsogram (str) {
  const newStr = str.toLowerCase()
  return newStr.split('').every((item, index, arr) => index === arr.indexOf((item)))
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('moOse'))
console.log(isIsogram('isIsogram'))

// alternative decision through Set

function isIsogram2 (str) {
  return new Set(str.toUpperCase()).size === str.length;
}

console.log(isIsogram2('Dermatoglyphics'))
