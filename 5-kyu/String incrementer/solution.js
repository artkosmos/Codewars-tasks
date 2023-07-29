function incrementString (string) {
  let number = ''

  for (let i = string.length - 1; i >= 0; i--) {
    if (!isNaN(string[i])) {
      number = string.slice(i)
    } else {
      break
    }
  }

  if (number) {
    const word = string.slice(0, -number.length)
    const newNumber = Number(number) + 1
    return word + newNumber.toString().padStart(number.length, '0')
  }

  return string + '1'
}

console.log(incrementString('foo0042'))
console.log(incrementString('foo'))