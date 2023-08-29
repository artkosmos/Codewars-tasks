// Write a function that takes a single string (word) as argument. The function must return
// an ordered list containing the indexes of all capital letters in the string.

const capitals = function (word) {
  const indexArray = []
  for (let i = 0; i < word.length; i++) {
    if (word[i].charCodeAt(0) >= 65 && word[i].charCodeAt(0) <= 90) {
      indexArray.push(i)
    }
  }

  return indexArray
}

console.log(capitals("CodEWaRs"))