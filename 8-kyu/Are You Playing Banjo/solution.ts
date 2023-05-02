/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!*/

function areYouPlayingBanjo(name: string): string {
  if (name[0] === 'r' || name[0] === 'R') {
    return `${name} plays banjo`
  }
  return `${name} does not play banjo`
}

console.log(areYouPlayingBanjo("Adam"))
console.log(areYouPlayingBanjo("rolf"))
console.log(areYouPlayingBanjo("Ringo"))