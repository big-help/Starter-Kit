const DIGIT = 4;
const DIGIT_NUMBER = Math.pow(10, DIGIT);
const MIN_ANSWER_DIGIT = Math.pow(10, DIGIT - 1);
const MAX_ANSWER_DIGIT = DIGIT_NUMBER - 1;
let ANSWER;

const startButton = document.getElementById("game-start");
const reStratButton = document.getElementById("game-restart");
const answerBox = document.getElementById("answer-box");
const answerInputBox = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const resultBox = document.getElementsByClassName("result-box");

startButton.addEventListener("click", activateGame);
answerInputBox.addEventListener("keydown", submitAnswer);
submitButton.addEventListener("click", answerVerificationChecker);

function generateRandomNumber () {
  const numberSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const numberResult = [];
  let randomDigitNumber;

  for (let i = 0; i < DIGIT; i++) {
    const randomNumber = Math.floor(Math.random() * numberSet.length);

    numberResult[i] = numberSet[randomNumber];

    if (numberResult[0] === 0) {
      return generateRandomNumber();
    }

    numberSet.splice(randomNumber, 1);
  }

  randomDigitNumber = numberResult.join("");

  ANSWER = randomDigitNumber;
  return ANSWER;
}

function activateGame() {
  answerInputBox.disabled = false;
  answerInputBox.placeholder = `${DIGIT}자리 숫자를 입력해주세요.`;

  generateRandomNumber();
}

function submitAnswer (event) {
  if (event.keyCode === 13) {
    answerVerificationChecker();
  }
}

function answerVerificationChecker () {
  const answerOfUser = Number(answerInputBox.value);

  if (answerOfUser < MIN_ANSWER_DIGIT || answerOfUser > MAX_ANSWER_DIGIT) {
    alert(`${DIGIT}자리의 숫자를 입력해주세요.`);
  } else {
    answerChecker(answerOfUser);
  }
}

function answerChecker (num) {
  const arrayOfUserNum = Array.from(String(num), Number);
  const arrayOfAnswer = Array.from(String(ANSWER), Number);
  const copyOfUserNum = [...arrayOfUserNum];
  const copyOfAnswer = [...arrayOfAnswer];
  let strike = 0;
  let ball = 0;

  console.log(arrayOfUserNum, arrayOfAnswer)

  for (let i = 0; i < DIGIT; i++) {
    for (const num of arrayOfAnswer) {
      if (arrayOfUserNum[i] === arrayOfAnswer[i]) {
        strike += 1;
        break;
      } else if (arrayOfAnswer.includes(arrayOfUserNum[i])) {
        ball += 1;
        break;
      }
    }   
  }
}

function addTryList (answerOfUser) {
  const p = document.createElement("p");
  const tryList = document.createTextNode(`${answerOfUser} / 1S 1B`);

  p.appendChild(tryList);

  resultBox[0].appendChild(p);
}