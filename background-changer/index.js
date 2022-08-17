const buttonElement = document.querySelector("button");
const pElement = document.querySelector("p");
const hex_code = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F"
]

buttonElement.addEventListener("click", changeColor);

function changeColor (event) {
  const bodyElement = document.querySelector("body");

  bodyElement.style.backgroundColor = getRandomHexCode();
  pElement.textContent = getRandomHexCode();
}

function getRandomHexCode () {
  let result = "#";

  for (i = 0; i < 6; i++) {
    result += hex_code[Math.floor(Math.random() * 16)];
  }
  return result;
}