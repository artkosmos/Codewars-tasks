/*
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false*/


const wordPattern = (pattern, string) => {
  const wordsFromString = string.split(' ')

  if (pattern.length !== wordsFromString.length) {
    return false
  }

  const coincidences = {}

  for (let i = 0; i < pattern.length; i++) {
    if (coincidences[pattern[i]] && coincidences[pattern[i]] !== wordsFromString[i]) {
      return false
    }
    coincidences[pattern[i]] = wordsFromString[i]
  }

  const values = Object.values(coincidences)

  return new Set(values).size === values.length
}