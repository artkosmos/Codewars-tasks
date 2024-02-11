/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']

  let s_copy = s
  let t_pointer = 0

  for (const letter of s) {
    if (consonants.includes(letter)) {
      if (consonants.includes(t[t_pointer])) {
        s_copy = s_copy.replace(letter, '')
        t_pointer++
      } else {
        break
      }
    } else {
      if (vowels.includes(t[t_pointer])) {
        s_copy = s_copy.replace(letter, '')
        t_pointer++
      } else {
        break
      }
    }
  }

  return !s_copy
}

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))
