/* Create the function that takes as a parameter a sequence of numbers
represented as strings and outputs a sequence of numbers.*/

function toNumberArray(stringarray){
  return stringarray.map(item => +item)
}

console.log(toNumberArray(['1', '2']))