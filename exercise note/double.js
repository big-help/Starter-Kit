const arr1 = [1, 2, 1]; 
const arr2 = [1, 3, 5, 3, 1]; 
const arr3 = [1, 6, 8, 4, 2, 3];

function doubleArray(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i + arr.length] = arr[i];
  }
  return arr;
}

console.log(doubleArray(arr3));

const result1 = doubleArray(arr1); // [1, 2, 1, 1, 2, 1]를 반환해야 합니다.
const result2 = doubleArray(arr2); // [1, 3, 5, 3, 1, 1, 3, 5, 3, 1]를 반환해야 합니다.
const result3 = doubleArray(arr3); // [1, 6, 8, 4, 2, 3, 1, 6, 8, 4, 2, 3]를 반환해야 합니다.

if (
  checkResult(result1, arr1) &&
  checkResult(result2, arr2) &&
  checkResult(result3, arr3)
) {
  console.log("🎉");
} else {
  console.log("error")
} 

















// 결과값 확인을 위한 함수이니 신경쓰지 않으셔도 됩니다.

function checkResult (result, arr) {
  if (result.length !== (arr.length * 2)) {
    return false;
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] !== arr[i % arr.length]) {
      return false;
    }
  }

  return true;
}