/*
Give you a sentence s. It contains some words and separated by spaces.
Another arguments is n, its a number(1,2 or 3). You should convert s to camelCase n.
There are three kinds of camelCase: "helloWorld", "hellOworld", "hellOWorld"
*/

function toCamelCase(s, n) {
  const separatedSentence = s.split(' ').map(item => item.toLowerCase())
  let updatedSentence = ''
  let word = ''

  if (n === 1) {
    for (let i = 0; i < separatedSentence.length; i++) {
      if (i === 0) {
        word = separatedSentence[i]
      } else {
        word = separatedSentence[i][0].toUpperCase() + separatedSentence[i].slice(1)
      }
      updatedSentence += word
    }
  }

  if (n === 2) {
    for (let i = 0; i < separatedSentence.length; i++) {
      if (i === separatedSentence.length - 1) {
        word = separatedSentence[i]
      } else {
        word = separatedSentence[i].slice(0, -1) + separatedSentence[i].at(-1).toUpperCase()
      }
      updatedSentence += word
    }
  }

  if (n === 3) {
    for (let i = 0; i < separatedSentence.length; i++) {
      if (i === 0) {
        word = separatedSentence[i].slice(0, -1) + separatedSentence[i].at(-1).toUpperCase()
      } else if (i === separatedSentence.length - 1) {
        word = separatedSentence[i][0].toUpperCase() + separatedSentence[i].slice(1)
      } else {
        word = separatedSentence[i][0].toUpperCase() + separatedSentence[i].slice(1, -1) + separatedSentence[i].at(-1).toUpperCase()
      }
      updatedSentence += word
    }
  }

  return updatedSentence
}

console.log(toCamelCase("hello world", 1))
console.log(toCamelCase("hello world", 2))
console.log(toCamelCase("hello world", 3))

