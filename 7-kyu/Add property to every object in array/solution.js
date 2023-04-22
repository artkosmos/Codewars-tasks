const questions = [{
  question: "What's the currency of the USA?",
  choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
  corAnswer: 0,
}, {
  question: 'Where was the American Declaration of Independence signed?',
  choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
  corAnswer: 0,
}];

const newArr = questions.map((obj) => {
  const copy = { ...obj }
  copy.usersAnswer = null
  return copy
})

console.log(questions)
console.log(newArr)
