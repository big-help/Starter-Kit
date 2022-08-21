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
reStratButton.addEventListener("click", refreshPage);
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
    answerInputBox.value = "";
  }
}

function answerVerificationChecker () {
  const answerOfUser = Number(answerInputBox.value);
  const uniqueNumOfUser = [... new Set(answerInputBox.value)];

  if (answerOfUser < MIN_ANSWER_DIGIT || answerOfUser > MAX_ANSWER_DIGIT) {
    alert(`중복되지 않는 ${DIGIT}자리의 숫자를 입력해주세요.`);
  } else if (uniqueNumOfUser.length < DIGIT) {
    alert(`중복되지 않는 ${DIGIT}자리의 숫자를 입력해주세요.`);
  } else {
    answerChecker(answerOfUser);
  }
  answerInputBox.value = "";
}

function answerChecker (num) {
  const arrayOfUserNum = Array.from(String(num), Number);
  const arrayOfAnswer = Array.from(String(ANSWER), Number);
  let strike = 0;
  let ball = 0;

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

  return addTryList (num, strike, ball);
}

function addTryList (answerOfUser, strike, ball) {
  const p = document.createElement("p");
  const tryList = document.createTextNode(`${answerOfUser} / ${strike} STRIKE ${ball} BALL`);

  p.appendChild(tryList);
  resultBox[0].appendChild(p);
  return checkResult(strike, ball);
}

function checkResult (strike, ball) {
  const submittedAnswerCount = resultBox[0].querySelectorAll("p").length;

  if (submittedAnswerCount === 10) {
    alert("다시 도전해주세요.");
    window.location.reload();
  } else if (strike === 4) {
    alert("정답입니다!");
    answerInputBox.disabled = true;
    answerInputBox.style.fontSize = "1rem";
    answerInputBox.placeholder = `다시하기를 눌러 새로운 게임을 시작해보세요.`;
  }
}

function refreshPage () {
  window.location.reload();
}
