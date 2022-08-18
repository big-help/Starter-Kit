/*

  다음과 같은 조건을 만족하는 캐로우셀을 완성해주세요!

  📌 좌측 화살표 클릭했을 때 이전 이미지를 보여주세요.
  📌 우측 화살표 클릭했을 때에는 다음 이미지를 보여주세요.
  📌 마지막 이미지에서 우측 화살표를 누를 경우, 첫번째 이미지를 보여주세요.
  📌 첫번째 이미지에서 좌측 화살표를 누를 경우, 마지막 이미지를 보여주세요.
  📌 이미지 하단의 점을 누를 경우, 해당 순번의 이미지를 보여주세요.

*/

/*

html 파일 중 img 태그에 hide 클래스 추가하기.
css 파일에 hide 클래스 display: none; 추가하기.

*/


const dotListElement = document.querySelector(".dot-list");
const dotItemElement = document.querySelectorAll(".dot-item");
let dotItemArrayLength = dotItemElement.length;
let imgElement = document.querySelectorAll("img");
let imgArrayLength = imgElement.length;

const arrowElement = document.querySelectorAll("i");
const leftArrow = arrowElement[0];
const rightArrow = arrowElement[1];

leftArrow.addEventListener("click", showPrevImage);
rightArrow.addEventListener("click", showNextImage);
dotListElement.addEventListener("click", showDotNumImage);

function showPrevImage () {
  for (i = 0; i < imgArrayLength; i++) {
    let imgClassList = imgElement[i].classList;
    let arrOfImgeClassList = Object.values(imgClassList);
    
    if (!arrOfImgeClassList.includes("hide")) {
      addPrevHideClass(i);
      break;
    }
  }
  return;
}
  

function addPrevHideClass (num) {
  if (num === 0) {
    imgElement[num].classList.add("hide");
    imgElement[imgArrayLength - 1].classList.remove("hide");
  } else {
    imgElement[num].classList.add("hide");
    imgElement[num - 1].classList.remove("hide");
  }
  return;
}

function showNextImage () {
  for (i = 0; i < imgArrayLength; i++) {
    let imgClassList = imgElement[i].classList;
    let arrOfImgeClassList = Object.values(imgClassList);
    
    if (!arrOfImgeClassList.includes("hide")) {
      addNextHideClass(i);
      break;
    }
  }
  return;
}

function addNextHideClass (num) {
  if (num === imgArrayLength - 1) {
    imgElement[imgArrayLength - 1].classList.add("hide");
    imgElement[0].classList.remove("hide");
  } else {
    imgElement[num].classList.add("hide");
    imgElement[num + 1].classList.remove("hide");
  }
  return;
}

function showDotNumImage (event) {
  for (i = 0; i < imgArrayLength; i++) {
    let imgClassList = imgElement[i].classList;
    let arrOfImgeClassList = Object.values(imgClassList);
    
    if (!arrOfImgeClassList.includes("hide")) {
      addCurrentImageHideClass(i, event);
    }
  }
  
  for (i = 0; i < dotItemArrayLength; i++) {
    
  }
  return;
}

function addCurrentImageHideClass (num, event) {
  
  imgElement[num].classList.add("hide");
  
  for (i = 0; i < dotItemArrayLength; i++) {
    if (dotItemElement[i] === event.target) {
      imgElement[i].classList.remove("hide");
    }
  }
  return;
}

