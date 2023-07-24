/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
All words must have their first letter capitalized without spaces.*/

String.prototype.camelCase=function(){
  if (!this.trim()) {
    return ''
  }
  return this
    .split(' ')
    .map(item => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join('')
}

console.log("camel case word".camelCase())
console.log(''.camelCase())