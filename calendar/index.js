const date = new Date();
const current_date = new Date(date.getFullYear(), date.getMonth(), date.getDate());

const current_day_box = document.getElementById("current-day");
const current_date_box = document.getElementById("current-date");
const arr_day = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];

function editCurrentDateInfo () {
  current_day_box.textContent = arr_day[current_date.getDay()];
  current_date_box.textContent = current_date.getDate();
}

editCurrentDateInfo();