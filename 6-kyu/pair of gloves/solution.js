function numberOfPairs (gloves) {
  const copyGloves = [...gloves]
  return copyGloves.reduce((pairs, item, _, array) => {
    if (array.indexOf(item) === array.lastIndexOf(item)) {
      return pairs + 0
    }
    array.splice(array.lastIndexOf(item), 1)
    return pairs + 1
  }, 0)
}

console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']))
console.log(numberOfPairs(['red', 'green', 'blue']))
console.log(numberOfPairs(['red', 'red']))

// variant 2
function numberOfPairs2 (gloves) {
  return gloves.reduce((pairs, item, _, array) => {
    const oneColor = array.filter((element) => element === item)
    return pairs + Math.floor(oneColor.length / 2)
  }, 0)
}

console.log(numberOfPairs2(['gray', 'black', 'purple', 'purple', 'gray', 'black']))
console.log(numberOfPairs2(['red', 'green', 'blue']))
console.log(numberOfPairs2(['red', 'red']))
