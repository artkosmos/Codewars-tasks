function toWeirdCase(string) {
  return string
    .split(' ')
    .map(item => {
      let newStyle = ''
      for (let i = 0; i < item.length; i++) {
        if (i % 2 === 0) {
          newStyle += item[i].toUpperCase()
        } else {
          newStyle += item[i].toLowerCase()
        }
      }
      return newStyle
    })
    .join(' ')
}

console.log(toWeirdCase("Weird string case"))