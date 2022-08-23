const MAX_DATE_NUM = 32;
const MAX_WEEK_NUM = 6;
const WEEKDAY = 7;

const date = new Date();
const current_date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

let year = current_date.getFullYear();
let month = current_date.getMonth();

const current_day_box = document.getElementById("current-day");
const current_date_box = document.getElementById("current-date");
const current_month_box = document.getElementsByClassName("current-month");
const trElement = document.getElementsByTagName("tr");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const arr_day = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];
const arr_month = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

leftArrow.addEventListener("click", showPrevCalendar);
// rightArrow.addEventListener("click", showNextCalendar);

function updateCurrentDateInfo () {
  current_day_box.textContent = arr_day[current_date.getDay()];
  current_date_box.textContent = current_date.getDate();
  current_month_box[0].children[0].textContent = `${arr_month[current_date.getMonth()]} ${current_date.getFullYear()}`;
}

function setDayName () {
  for (let i = 0; i < WEEKDAY; i++) {
    trElement[0].children[i].textContent = arr_day[i];
  }
}

function getMonthDateObject (year, month) {
  let month_date_object = {};
  for (let i = 1; i < MAX_DATE_NUM; i++) {
    const date_info = new Date(year, month, i);

    if (date_info.getMonth() === month)
    month_date_object[date_info.getDate()] = date_info.getDay();
  }

  return month_date_object;
}

function updateCalendarDateInfo (year, month) {
  const month_date_object = getMonthDateObject(year, month);
  let weeks = 1;

  for (const keys in month_date_object) {
    trElement[weeks].children[month_date_object[keys]].textContent = keys;
    if (month_date_object[keys] === 6) {
      weeks += 1;
    }
  }
}

function showPrevCalendar () {
  console.log(current_date.getMonth(), current_date.getFullYear());
  month = month - 1;

  updateCalendarDateInfo(year, month);
}

updateCurrentDateInfo();
setDayName();
updateCalendarDateInfo(2022, 7);