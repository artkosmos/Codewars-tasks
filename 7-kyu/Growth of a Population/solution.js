// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
// the function nb_year should return n number of entire years needed to get a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
  let finalPopulation = p0
  let entireYears = 0
  while (p > finalPopulation) {
    finalPopulation = Math.floor(finalPopulation + finalPopulation * (percent / 10 ** 2) + aug)
    entireYears += 1
  }
  return entireYears
}

console.log(nbYear(1500000, 0, 10000, 2000000))
console.log(nbYear(1000, 2, 50, 1214))