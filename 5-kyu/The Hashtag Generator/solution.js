/*
Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
  if (!str.trim()) {
    return false
  }

  const arrWords = str
    .split(' ')
    .map(item => item.charAt(0).toUpperCase() + item.slice(1)) //charAt не ломается как item[0] при итерации
  const result = `#${arrWords.join('')}`

  return result.length > 140 ? false : result
}

console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag("     "))