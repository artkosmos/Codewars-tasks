function sortByBit (array) {
  const arrayOfBits = array.map((item) => item.toString(2))
  const arrayOfBitsOn = arrayOfBits.map((item) => item.split('').filter((element) => element === '1'))
  array.sort((a, b) => {
    if (arrayOfBitsOn[array.indexOf(a)].length > arrayOfBitsOn[array.indexOf(b)].length) {
      return 1
    }
    if (arrayOfBitsOn[array.indexOf(a)].length < arrayOfBitsOn[array.indexOf(b)].length) {
      return -1
    }
    return a - b
  })
  return array
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1, 15]))
