
const n1 = 370;
const n2 = 1357;
const n3 = 33333;

function splitNumber(num) {
  let stringArray = num.toString();
  let numberArray = [];
  let result = numberArray;
  
  for (i = 0; i < stringArray.length; i++) {
    numberArray[i] = Number(stringArray[i]);
  }
  return result;
  }

const result1 = splitNumber(n1); // [3, 7, 0]를 반환해야 합니다.
const result2 = splitNumber(n2); // [1, 3, 5, 7]를 반환해야 합니다.
const result3 = splitNumber(n3); // [3, 3, 3, 3, 3]를 반환해야 합니다.

if (
  checkResult(result1, [3, 7, 0]) &&
  checkResult(result2, [1, 3, 5, 7]) &&
  checkResult(result3, [3, 3, 3, 3, 3])
) {
  alert("🎉");
}
















// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult (result, answer) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] !== result[i]) {
      return false;
    }
  }

  return true;
}