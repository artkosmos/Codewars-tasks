/* Write a function, nicknameGenerator that takes a string name as an argument 
and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"

If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"

If the string is less than 4 characters, return "Error: Name too short". */

function nicknameGenerator(name) {
  const vowels = "aeiou"
  let nickname
  if (name.length < 4) {
    return "Error: Name too short"
  }
  if (vowels.includes(name[2])) {
    nickname = name.slice(0, 4)
  } else {
    nickname = name.slice(0, 3)
  }
  return nickname
}

console.log(nicknameGenerator("Sam"))
console.log(nicknameGenerator("Melissa"))
console.log(nicknameGenerator("Anie"))
