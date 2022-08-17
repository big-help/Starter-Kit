function createArray(arr1, arr2) {
  let obj = {};
  let result = obj;
  
  for (i = 0; i < arr1.length; i++) {
    obj.[arr1[i]] = arr2[i];
  }
  
  return result;
}

const result1 = createArray(["Jett", "Ken"], [30, 40]);
const result2 = createArray(["Math", "Science", "English"], [85, 90, 75]);
const result3 = createArray(["Pizza", "Salad", "Pasta", "Steak"], [3, 4, 2, 1]);

if (
  checkResult(result1, { Jett: 30, Ken: 40 }) &&
  checkResult(result2, { Math: 85, Science: 90, English: 75 }) &&
  checkResult(result3, { Pizza: 3, Salad: 4, Pasta: 2, Steak: 1 }) 
) {
  alert("🎉");
}
















// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult (result, answer) {
  for (const prop in answer) {
    if (result[prop] !== answer[prop]) {
      return false;
    }
  }

  return true;
}