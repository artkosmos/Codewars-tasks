// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation
//
// f(n) = f(n-1) + f(n-2)

const fibonacci = n => {
  if (n <= 2) return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(3))