//The first letter is always capital
function capitalizeWord (word) {
  return word[0].toUpperCase() + word.slice(1)
}

console.log(capitalizeWord('suck'))
console.log(capitalizeWord('unfortunately'))
console.log(capitalizeWord('resolve'))
