/* Complete the function so that it finds the average of the three scores passed to it
and returns the letter value associated with that grade.
90 <= score <= 100 'A'
80 <= score < 90 'B'
70 <= score < 80 'C'
60 <= score < 70 'D'
0 <= score < 60 'F' */

function getGrade(score1, score2, score3) {
  const averageScoreValue = (score1 + score2 + score3) / 3
  if (averageScoreValue >= 90 && averageScoreValue <= 100) return 'A'
  if (averageScoreValue >= 80 && averageScoreValue <= 90) return 'B'
  if (averageScoreValue >= 70 && averageScoreValue <= 80) return 'C'
  if (averageScoreValue >= 60 && averageScoreValue <= 70) return 'D'

  return 'F'
}

console.log(getGrade(95, 90, 93))
console.log(getGrade(60, 60, 50))
