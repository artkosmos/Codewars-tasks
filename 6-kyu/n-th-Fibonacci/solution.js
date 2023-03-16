function nthFibo (n) {
  if (n === 1) return 0
  if (n === 2) return 1
  let previousNum = 1
  let prePreviousNum = 0
  for (let i = 3; i <= n; i += 1) {
    const currentNum = prePreviousNum + previousNum
    prePreviousNum = previousNum
    previousNum = currentNum
  }
  return previousNum
}

console.log(nthFibo(10))
console.log(nthFibo(56))
console.log(nthFibo(5))
console.log(nthFibo(1))
