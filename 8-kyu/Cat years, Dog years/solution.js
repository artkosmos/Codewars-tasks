/*
I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]
*/

const humanYearsCatYearsDogYears = function(humanYears) {
  let catYears = 0
  let dogYears = 0
  if (humanYears > 0) {
    catYears += 15
    dogYears += 15
  }
  if (humanYears > 1) {
    catYears += 9
    dogYears += 9
  }
  if (humanYears > 2) {
    catYears += (humanYears - 2) * 4
    dogYears += (humanYears - 2) * 5
  }
  return [humanYears, catYears, dogYears]
}

console.log(humanYearsCatYearsDogYears(10))
