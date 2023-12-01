// In this kata you should simply determine, whether a given year is a leap year or not.
// In case you don't know the rules, here they are:
// Years divisible by 4 are leap years,
//   but years divisible by 100 are not leap years,
//   but years divisible by 400 are leap years.

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true
  } else if (year % 100 === 0) {
    return false
  } else if (year % 4 === 0) {
    return true
  }
  return false
}

console.log(isLeapYear(2020))
console.log(isLeapYear(2015))
console.log(isLeapYear(2100))
