/* runLengthEncoding("hello world")
[[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d']] */

const runLengthEncoding = function (str) {
  const result = []
  let counter = 1

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      counter += 1
    } else {
      result.push([counter, str[i]])
      counter = 1
    }
  }
  return result
}

console.log(runLengthEncoding('abc'))
console.log(runLengthEncoding('aaaaaaaaaabc'))
