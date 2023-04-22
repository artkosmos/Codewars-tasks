/* Friday 13th or Black Friday is considered as unlucky day.
Calculate how many unlucky days are in the given year.

Find the number of Friday 13th in the given year. */

function unluckyDays (year) {
  let fridayCount = 0
  for (let i = 0; i < 12; i += 1) {
    if (new Date(year, i, 13).getDay() === 5) {
      fridayCount += 1
    }
  }
  return fridayCount
}

console.log(unluckyDays(2023))
console.log(unluckyDays(2011))
