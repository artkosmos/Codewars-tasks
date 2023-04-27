/*
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.*/

function past(h: number, m: number, s: number): number {
  const millSecondsInHour :number = h * 60 * 60 * 10 ** 3
  const millSecondsInMinute :number = m * 60 * 10 ** 3
  const millSecondsInSecond :number = s * 10 ** 3
  return millSecondsInHour + millSecondsInMinute + millSecondsInSecond
}

console.log(past(0, 1, 1))