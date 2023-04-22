function add (num1, num2) {
  let firstNumber = num1.toString()
  let secondNumber = num2.toString()
  if (firstNumber.length !== secondNumber.length) {
    secondNumber = secondNumber.padStart(firstNumber.length, '0')
    firstNumber = firstNumber.padStart(secondNumber.length, '0')
  }
  return Number([...firstNumber].reduce((result, item, index) => result + (+item + +[...secondNumber][index]).toString(), ''))
}

console.log(add(2, 11))
