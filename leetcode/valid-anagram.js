/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true*/

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false

  const sorted_S = s.split('').sort().join('')
  const sorted_T = t.split('').sort().join('')

  return sorted_T === sorted_S
}

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))