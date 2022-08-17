const arr1 = [10];
const arr2 = [4, 10, 1, 5];
const arr3 = [13, 5, 7, 3, 10, 9];

function findMinNumber(arr) {
  let result = arr[0];
  
  for (const element of arr) {
    if (result > element) {
      result = element;
    }
  }
  
  return result;
}


const result1 = (findMinNumber(arr1) === 10);
const result2 = (findMinNumber(arr2) === 1);
const result3 = (findMinNumber(arr3) === 3);

if (
  result1 &&
  result2 &&
  result3
) {
  console.log("통과");
}