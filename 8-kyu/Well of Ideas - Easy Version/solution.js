/*
In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or
two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'.
If there are no good ideas, as is often the case, return 'Fail!'.*/

function well(x) {
  const goodIdeas = x.filter(item => item === 'good')
  if (goodIdeas.length === 1 || goodIdeas.length === 2) {
    return 'Publish!'
  }
  if (goodIdeas.length > 2) {
    return 'I smell a series!'
  }
  return 'Fail!'
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))
