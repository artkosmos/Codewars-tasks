/*Given a random non-negative number, you have to return
the digits of this number within an array in reverse order.*/

const digitize = (num :number) :number[] => {
  const numberToString :Array<string> = num.toString().split('')
  return numberToString.map((item :string) :number => +item).reverse()
};

console.log(digitize(35231))