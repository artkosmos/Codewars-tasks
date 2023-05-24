/*
Jumping number is the number that All adjacent digits in it differ by 1.
Given a number, Find if it is Jumping or not .*/

function jumpingNumber(number){
  if (number.toString().length === 1) {
    return 'Jumping!!'
  }
  const arrayOfDigits = number.toString().split('')
  for (let i = 0; i < arrayOfDigits.length - 1; i++) {
    if (Math.abs(+arrayOfDigits[i + 1] - +arrayOfDigits[i]) !== 1) {
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}

console.log(jumpingNumber(23))