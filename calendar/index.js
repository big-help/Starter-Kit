const date = new Date();
const current_date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

const current_day_box = document.getElementById("current-day");
const current_date_box = document.getElementById("current-date");
const current_month_box = document.getElementsByClassName("current-month");
const arr_day = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];
const arr_month = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

function editCurrentDateInfo () {
  current_day_box.textContent = arr_day[current_date.getDay()];
  current_date_box.textContent = current_date.getDate();
  current_month_box[0].children[0].textContent = `${arr_month[current_date.getMonth()]} ${current_date.getFullYear()}`;
}

editCurrentDateInfo();