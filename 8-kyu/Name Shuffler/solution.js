/*
Write a function that returns a string in which firstname is swapped with last name.*/

function nameShuffler(str) {
  const array = str.split(' ')
  return `${array[1]} ${array[0]}`
}

console.log(nameShuffler('john McClane'))