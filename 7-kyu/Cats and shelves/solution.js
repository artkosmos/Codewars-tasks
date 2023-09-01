function solution(start, finish) {
  let jumps = 0
  let shelves = start
  while (shelves < finish) {
    if (finish - shelves >= 3) {
      shelves += 3
    } else {
      shelves += 1
    }
    jumps += 1
  }

  return jumps
}

console.log(solution(1, 5))