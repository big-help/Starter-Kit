const date = new Date();
const firstDate = new Date(date.getFullYear(), date.getMonth(), 1);
const firstDay = firstDate.getDay();
const secondTableLine = document.querySelectorAll("tr")[1];

function displayFirstDay () {
  for (i = 0; i < 7; i++)
    if (i === firstDay) {
      for (i = firstDay; i < 7; i++) {
      secondTableLine.children[i].textContent = i;
      }
      return;
    }
}

displayFirstDay();