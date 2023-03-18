/* Your mission:
Write a function called checkCoupon
which verifies that a coupon code is valid and not expired.
A coupon is no more valid on the day AFTER the expiration date.
All dates will be passed as strings in this format: "MONTH DATE, YEAR". */

function checkCoupon (enteredCode, correctCode, currentDate, expirationDate) {
  if ((enteredCode === correctCode)
    && (Date.parse(currentDate) <= Date.parse(expirationDate))) {
    return true
  }
  return false
}
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'))
