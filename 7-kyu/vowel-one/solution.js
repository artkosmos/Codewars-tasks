/* Write a function that takes a string and outputs a strings of 1's and 0's
where vowels become 1's and non-vowels become 0's.

All non-vowels including non alpha characters (spaces,commas etc.) should be included. */

function vowelOne (string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return string
    .split('')
    .reduce((result, element) => result + (vowels.includes(element.toLowerCase()) ? '1' : '0'), '')
}

console.log(vowelOne('vowelOne'))
console.log(vowelOne('uc\\i+u@UOOA`)IuI uY%EOz?m@e&wn'))
