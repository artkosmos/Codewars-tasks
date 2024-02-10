/*
Given two strings ransomNote and magazine, return true if ransomNote can
be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  let constructedNote = ''
  let ransomPointer = 0
  let magazineCopy = magazine

  while (ransomNote.length > 0) {
    const letterIndex = magazineCopy.indexOf(ransomNote[ransomPointer])
    if (letterIndex !== -1) {
      constructedNote += ransomNote[ransomPointer]
      ransomPointer += 1
      magazineCopy = magazineCopy.replace(magazineCopy[letterIndex], '')
    } else {
      break
    }
  }

  return constructedNote === ransomNote
};

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))