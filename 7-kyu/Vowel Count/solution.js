/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return string.split('').reduce((counter, item) => {
    if (vowels.includes(item)) {
      counter += 1
    }
    return counter
  }, 0)
}

console.log(getCount("abracadabra"))