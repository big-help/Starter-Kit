
function generateRandomNumber () {
  const DIGIT_NUMBER = 5; 
  const randomDigitNumber = Math.floor(Math.random() * Math.pow(10, DIGIT_NUMBER));

  if (randomDigitNumber < Math.pow(10, DIGIT_NUMBER - 1)) {
    return generateRandomNumber();
  }

  return randomDigitNumber;
}




