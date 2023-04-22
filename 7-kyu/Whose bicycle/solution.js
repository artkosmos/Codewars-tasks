/* I am the father of three wonderful sons. before the beginning of the school year,
I promised them that I would buy a bicycle for someone who would bring
the best marks at the end of the school year.
It's time to keep promises and I count on you.
If two or three sons have the same highest marks, you need to choose the younger one. */

// eslint-disable-next-line no-unused-vars
const ageTable = {
  firstSonAge: 14,
  secondSonAge: 9,
  thirdSonAge: 8,
}

// eslint-disable-next-line consistent-return
function whoseBicycle (diary1, diary2, diary3) {
  const firstSonMarks = Object.values(diary1).reduce((sum, item) => sum + item, 0)
  const secondSonMarks = Object.values(diary2).reduce((sum, item) => sum + item, 0)
  const thirdSonMarks = Object.values(diary3).reduce((sum, item) => sum + item, 0)
  if (firstSonMarks > secondSonMarks && firstSonMarks > thirdSonMarks) {
    return 'I need to buy a bicycle for my first son'
  }
  if (secondSonMarks >= firstSonMarks && secondSonMarks > thirdSonMarks) {
    return 'I need to buy a bicycle for my second son'
  }
  if (thirdSonMarks >= firstSonMarks && thirdSonMarks >= secondSonMarks) {
    return 'I need to buy a bicycle for my third son'
  }
}

const diary1 = {
  algebra: 6,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
}
const diary2 = {
  algebra: 8,
  history: 7,
  physics: 8,
  geography: 9,
  chemistry: 10,
}
const diary3 = {
  algebra: 6,
  history: 5,
  physics: 5,
  geography: 9,
  chemistry: 10,
}

console.log(whoseBicycle(diary1, diary2, diary3))
