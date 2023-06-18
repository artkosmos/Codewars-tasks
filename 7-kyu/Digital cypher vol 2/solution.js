/*
Write a function that accepts an array of integers code and a key number.
As the result, it should return string containg a decoded message from the code.*/

function decode(code, key) {
  const keyString = key.toString();
  let keyIndex = 0;

  // Convert each code number back to its corresponding letter
  const message = code.map((num) => {
    const decodedNum = num - parseInt(keyString[keyIndex]);
    keyIndex = (keyIndex + 1) % keyString.length; // Move to the next digit of the key

    // Handle wrapping around if the decoded number is less than 1
    const decodedAdjustedNum = decodedNum < 1 ? decodedNum + 26 : decodedNum;

    return String.fromCharCode(decodedAdjustedNum + 96); // Convert the number to its corresponding letter
  });

  return message.join(''); // Join the letters to form the decoded message
}