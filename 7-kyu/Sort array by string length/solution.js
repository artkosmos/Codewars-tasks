/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings,
ordered from shortest to longest.*/

function sortByLength(array) {
  const copy = [...array]
  return copy.sort((a, b) => a.length - b.length)
}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))
