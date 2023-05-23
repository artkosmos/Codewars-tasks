/*
The parameter of accum is a string which includes only letters from a..z and A..Z.*/

function accum(s) {
  const result = []
  for (let i = 0; i < s.length; i++) {
    const newItem = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
    result.push(newItem)
  }
  return result.join('-')
}

console.log(accum("ZpglnRxqenU"))