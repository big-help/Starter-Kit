/*

  다음과 같은 조건을 만족하는 월간 달력을 만들어 주세요!
  
  📌 일요일 부터 토요일까지 차례대로 보여져야 합니다.
  📌 현재 날짜를 기준으로, 이번 달의 일수가 1일부터 표시되어야 합니다.
  📌 이번 달의 1일 부터 마지막 일수 까지 표시되어야 합니다.
  
  🚨 HTML, CSS와 JS 모두 스스로 작성해주세요.
  

  +---------------------------------------------+
  |  일   |  월  |  화  |  수  |  목  |  금  |  토  |
  +---------------------------------------------+
  |      |      |  1  |   2  |  3  |   4  |  5  |
  +---------------------------------------------+
  |   6  |  7   |  8  |   9  |  10  |  11 |  12 |
  +---------------------------------------------+
  |  13  |  14  |  15 |  16  |  17  |  18 |  19 |
  +---------------------------------------------+
  |  20  |  21  |  22 |  23  |  24  |  25 |  26 |
  +---------------------------------------------+
  |  27  |  28  |  29 |  30  |      |     |     |
  +---------------------------------------------+

*/

const date = new Date();
const days = ["일", "월", "화", "수", "목", "금", "토"];
const thElement = document.querySelectorAll("th");
const trElement = document.querySelectorAll("tr");
const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
const firstDay = firstDate.getDay();
const lastDay = lastDate.getDay();
let weeks = 1;

function displayWeekdays () {
  for (i = 0; i < days.length; i++) {
    thElement[i].textContent = days[i];
  }
}
  
function displayFirstWeeks () {
  for (i = firstDay; i < days.length; i++) {
    trElement[weeks].children[i].textContent = i;
  }
  displayLastOfWeeks();
   
}  

function displayLastOfWeeks () {
  if (trElement[weeks].children[6]) {
    displayNthWeek();
    displayNthWeek();
    displayNthWeek();
    displayNthWeek();
  }
}

function displayNthWeek () {
  let firstDateOfWeeks = Number(trElement[weeks].children[6].innerText);
  weeks = weeks + 1;
  
  for (i = 0; i < days.length; i++) {
    if (firstDateOfWeeks + i < lastDate.getDate())
    trElement[weeks].children[i].textContent = firstDateOfWeeks + i + 1;      
  }
}

displayWeekdays();
displayFirstWeeks();
