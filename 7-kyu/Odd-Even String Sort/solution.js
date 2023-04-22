/* Given a string s. You have to return another string such that even-indexed 
and odd-indexed characters of s are grouped and groups are 
space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces */

function sortMyString(string) {
  const oddIndex = []
  const evenIndex = []
  const arrayOfLetters = string.split("")
  arrayOfLetters.forEach((element, index) => {
    if (index % 2 === 0 || index === 0) {
      evenIndex.push(element)
    } else {
      oddIndex.push(element)
    }
  })
  return `${evenIndex.join("")} ${oddIndex.join("")}`
}

console.log(sortMyString("CodeWars"))
console.log(sortMyString("YCOLUE'VREER"))
