/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits
that occur more than once in the input string. The input string can be assumed to contain only alphabets
(both uppercase and lowercase) and numeric digits.*/

function duplicateCount(text) {
  let duplicates = 0
  const countObject =  text.split('').reduce((result, item) => {
    const itemLowerCase = item.toLowerCase()
    if (result[itemLowerCase]) {
      result[itemLowerCase] += 1
    } else {
      result[itemLowerCase] = 1
    }
    return result
  }, {})

  for (let key in countObject) {
    if (countObject[key] > 1) {
      duplicates += 1
    }
  }
  return duplicates
}

console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('Indivisibility'))
console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
console.log(duplicateCount('aabBcde'))