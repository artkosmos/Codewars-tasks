// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

const greet = (name) => {
  const correctName = name[0].toUpperCase() + name.slice(1).toLowerCase()
  return `Hello ${correctName}!`
}

console.log(greet('JACK'))
console.log(greet('riLEy'))