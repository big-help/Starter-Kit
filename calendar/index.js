const MAX_DATE_NUM = 32;
const MAX_WEEK_NUM = 7;
const WEEKDAY = 7;

const dateObj = new Date();
const current_date = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate());

let year = current_date.getFullYear();
let month = current_date.getMonth();
let day = current_date.getDay();
let date = current_date.getDate();

const current_day_box = document.getElementById("current-day");
const current_date_box = document.getElementById("current-date");
const current_month_box = document.getElementsByClassName("current-month");
const trElement = document.getElementsByTagName("tr");
const tdElement = document. querySelectorAll("td");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const arr_day = [
  "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"
];
const arr_month = [
  "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

function updateCurrentDateInfo (year, month, date, day) {
  current_day_box.textContent = arr_day[day];
  current_date_box.textContent = date;
  current_month_box[0].children[0].textContent = `${year}년 ${month+1}월`;
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

    if (date_info.getMonth() === month) {
    month_date_object[date_info.getDate()] = date_info.getDay();
		}
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
  if (month === 0) {
		year -= 1;
		month = 11;
	} else {
		month -= 1;
	}

	date = 1;
	day = new Date(year, month, date).getDay();

	updateCurrentDateInfo(year, month, date, day);
	resetCalendar();
  updateCalendarDateInfo(year, month);
}

function showNextCalendar () {
	if (month === 11) {
		year += 1;
		month = 0;
	} else {
		month += 1;
	}
	
	date = 1;
	day = new Date(year, month, date).getDay();

	updateCurrentDateInfo(year, month, date, day);
	resetCalendar();
  updateCalendarDateInfo(year, month);
}

function resetCalendar () {
	for (let i = 1; i < MAX_WEEK_NUM; i++) {
		for (let j = 0; j < WEEKDAY; j++) {
			trElement[i].children[j].textContent = "";
		}
	}
}

function changeDateInfo(event) {
	date = event.target.textContent;
	day = new Date(year, month, date).getDay();

	updateCurrentDateInfo(year, month, date, day);
}

updateCurrentDateInfo(year, month, date, day);
updateCalendarDateInfo(year, month);
setDayName();

leftArrow.addEventListener("click", showPrevCalendar);
rightArrow.addEventListener("click", showNextCalendar);
tdElement.forEach(function(element) {
	if (element.innerText !== "") {
		element.addEventListener("click", changeDateInfo);
	}
});
