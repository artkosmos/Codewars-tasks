/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'*/

function expandedForm(num) {
  const digitsArr = num.toString().split('')
  const expandedFormArr = digitsArr.reduce((result, item, index) => {
    if (+item !== 0) {
      const multiplyValue = Math.pow(10, digitsArr.length - index - 1)
      result.push(+item * multiplyValue)
    }
    return result
  }, [])

  return expandedFormArr.join(' + ')
}

console.log(expandedForm(70304))