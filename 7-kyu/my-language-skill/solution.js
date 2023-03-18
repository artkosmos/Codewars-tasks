/* You are given a dictionary/hash/object containing some
languages and your test results in the given languages.
Return the list of languages where your test score is
at least 60, in descending order of the scores. */

function myLanguages (obj) {
  return Object.keys(obj)
    .filter((element) => obj[element] > 59)
    .sort((a, b) => obj[b] - obj[a]) // строковые ключи сравниваются по их значениям в объекте
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }))
console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }))
