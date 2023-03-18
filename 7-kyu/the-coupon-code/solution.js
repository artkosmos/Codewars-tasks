function checkCoupon (enteredCode, correctCode, currentDate, expirationDate) {
  if ((enteredCode === correctCode)
    && (Date.parse(currentDate) <= Date.parse(expirationDate))) {
    return true
  }
  return false
}
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))

/* console.log(Date.parse('September 5, 2014'))
console.log(Date.parse('October 1, 2014')) */
