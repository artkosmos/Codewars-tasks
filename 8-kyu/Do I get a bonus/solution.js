/*
It's bonus time in the big city! The fatcats are rubbing their ' +
'paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus).
Salary will be an integer, and bonus a boolean.
If bonus is true, the salary should be multiplied by 10. If bonus is false,
the fatcat did not make enough money and must receive only his stated salary.*/

function bonusTime(salary, bonus) {
  const poundsSign = '\u00A3'
  if (bonus) {
    return `${poundsSign}${salary * 10}`
  }
  return `${poundsSign}${salary}`
}

console.log(bonusTime(1000, true))
