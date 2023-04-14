/* Some people have been killed!
You have managed to narrow the suspects down to just a few.
Luckily, you know every person who those suspects have seen
on the day of the murders.
Return the name of the one killer, who is the only person that saw both victims. */

function killer (suspectInfo, dead) {
  let murder
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const name in suspectInfo) {
    const checkingElement = suspectInfo[name]
    const coincidences = checkingElement.filter((item) => dead.includes(item))
    if (coincidences.length === dead.length) {
      murder = name
    }
  }
  return murder
}

const people = {
  James: ['Jacob', 'Bill', 'Lucas'],
  Johnny: ['David', 'Kyle', 'Lucas'],
  Peter: ['Lucy', 'Kyle'],
}

const victims = ['Lucas', 'Bill']

console.log(killer(people, victims))
