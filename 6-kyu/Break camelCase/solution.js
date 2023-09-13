// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
  let newString = ''
  for (let letter of string) {
    if (letter === letter.toUpperCase()) {
      newString += ' ' + letter
    } else {
      newString += letter
    }
  }

  return newString
}

console.log(solution('camelCasingTest'))