/* You must create a function, spread, that takes a function and a list of
arguments to be applied to that function. You must make this function
return the result of calling the given function/lambda with the given arguments. */

function spread (func, args) {
  return func(...args)
}

console.log(spread((x, y) => x + y, [1, 2]))
