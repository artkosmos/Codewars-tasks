/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.*/

function alphabetPosition(text) {
  const array = text.toLowerCase().split('')
  const arrayOnlyLetters = array.filter(item => item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122)
  return arrayOnlyLetters.reduce((acc, item) => {
    const alphabetOrderLetter = item.charCodeAt(0) - 96  // to count from the beginning
    return (acc + ' ' + alphabetOrderLetter).trim()
  },'')
}


console.log(alphabetPosition("The sunset sets at twelve o' clock."))
