
const buttonElement = document.querySelector("button");
const trafficLight = [
  ".red",
  ".orange",
  ".green"
];

const spanElement = document.querySelectorAll("span");
const containerElement = document.querySelector(".container");

containerElement.addEventListener("click", changeColor);

function changeColor (event) {  
  if (event.target.textContent === "Stop") {
    document.querySelector(trafficLight[0]).style.backgroundColor = "red";
  } else if (event.target.textContent === "Pause") {
    document.querySelector(trafficLight[1]).style.backgroundColor = "orange";
  } else if (event.target.textContent === "Go") {
    document.querySelector(trafficLight[2]).style.backgroundColor = "green";
  } else if (event.target.textContent === "전체 불 끄기 💡"){
    for (i = 0; i < trafficLight.length; i++) {
      document.querySelector(trafficLight[i]).style.backgroundColor = "white";
    }
  } 
}