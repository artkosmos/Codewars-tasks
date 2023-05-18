/*
In this little assignment you are given a string of space separated numbers,
and have to return the highest and lowest number.
*/

function highAndLow(numbers) {
  const sortedNumbers = numbers
    .split(' ')
    .map(item => Number(item))
    .sort((a, b) => a - b)
  return `${sortedNumbers.at(-1)} ${sortedNumbers[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))