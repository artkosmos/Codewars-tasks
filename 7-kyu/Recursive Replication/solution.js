// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5)
// should return [5,5,5]. If the times argument is negative, return an empty array.
//
// As tempting as it may seem, do not use loops to solve this problem.

function replicate(times, number) {
  if (times <= 0) {
    return []
  }
  const replica = replicate(times - 1, number)
  return [number, ...replica]
}

console.log(replicate(3, 5))
console.log(replicate(-1, 5))
