/*
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2)
numbers of the sequence to generate the next*/

function tribonacci(signature, n) {
    const tribonacciArray = [...signature]
    let a = signature[0]
    let b = signature[1]
    let c = signature[2]
    if (n < 3) {
        return tribonacciArray.slice(0, n)
    }
    while (tribonacciArray.length < n) {
        let nextNumber = a + b + c
        tribonacciArray.push(nextNumber)
        a = b
        b = c
        c = nextNumber
    }
    return tribonacciArray
}

console.log(tribonacci([1, 1, 1], 10))
console.log(tribonacci([1, 1, 1], 1))
console.log(tribonacci([1, 1, 1], 0))