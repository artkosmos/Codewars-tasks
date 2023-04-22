/* Given a string made of digits [0-9],
return a string where each digit is repeated a number of times equals to its value. */

function explode (string) {
  return string.split('').reduce((acc, item) => acc + item.repeat(+item), '')
}

console.log(explode('312'))
