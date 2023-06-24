/*
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
  const newCounter = counter();
newCounter() // 1
newCounter() // 2*/

function counter() {
  let counter = 0
  return function () {
    console.log(++counter)
  }
}

const closureCounter = counter()

counter()()
closureCounter()
closureCounter()