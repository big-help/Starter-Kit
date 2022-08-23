const MAX_DATE_NUM = 32;
const MAX_WEEK_NUM = 6;
const WEEKDAY = 7;

const date = new Date();
const current_date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
const first_date = new Date(date.getFullYear(), date.getMonth(), 1);

const current_day_box = document.getElementById("current-day");
const current_date_box = document.getElementById("current-date");
const current_month_box = document.getElementsByClassName("current-month");
const trElement = document.getElementsByTagName("tr");
const arr_day = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];
const arr_month = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

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
  let month_date_array = getMonthDateObject(year, month);
  console.log(month_date_array);

  for (const keys of month_date_array) {
    
    
  }

    for (let j = 1; j < MAX_WEEK_NUM; j++) {
      trElement[j].children[date_info.getDay()].textContent = date_info.getDate();
      if (trElement[j].children[date_info.getDay()] === 6) break;
    }
}

updateCurrentDateInfo();
setDayName();
updateCalendarDateInfo(2022, 9);