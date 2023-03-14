/* Your task is to write a function that takes a string and return
a new string with all vowels removed.

For example, the string "This website is for losers LOL!"
would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel (str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return str.split('').filter((element) => !vowels.includes(element.toLowerCase())).join('')
}

console.log(disemvowel('This website is for losers LOL!'))
