// Ninjas frequently need to signal each other in code, often employing natural sounds as a cover.
// We’re going to give our ninja the ability to chirp like a cricket, with the number of chirps encoding different messages.
//
// Implement a "recursive function" that takes one parameter (n) and outputs a string i.e.

function chirp(n) {
  if (n === 0) {
    return ''
  }
  return 'chirp' +`${n === 1 ? '' : '-'}` + `${chirp(n - 1)}`
}

console.log(chirp(4))