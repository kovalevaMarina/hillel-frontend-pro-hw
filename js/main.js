let body = document.body;

const createElement = (
  tag,
  nameClass,
  parent = body,
  imgName = undefined,
  text = undefined
) => {
  let elem = document.createElement(tag);
  elem.className = nameClass;
  if (text) elem.innerHTML = text;
  if (imgName) elem.setAttribute("src", `./img/${imgName}.png`);
  parent.append(elem);
  return elem;
};

let wrap = createElement("div", "wrap");
let fieldWrap = createElement("div", "field-wrap", wrap);
let fishka = createElement("img", "fishka-img", fieldWrap, "fishka");
let cube = createElement("img", "cube-img", wrap, "1");
let btnWrap = createElement("button", "btn-wrap", wrap);

let result = createElement("div", "result", wrap, undefined, "Start game!");

store = {
  countField: 8,
  countBtn: 2,
  moveStep: 130,
  maxLeft: 945,
  startLeftPosition: 35,
  numberCube: 1,
};

const {
  countField,
  countBtn,
  moveStep,
  maxLeft,
  startLeftPosition,
  numberCube,
} = store;

// генерация полей для передвижения фишки
for (i = 0; i < countField; i++) {
  createElement("div", "field", fieldWrap);
}

// // генерация кнопок
for (i = 0; i < countBtn; i++) {
  createElement("button", "btn", btnWrap);
}

const nameClassesBtn = (item, classBtn, text) => {
  item.classList.add(classBtn);
  item.innerHTML = text;
};

const addClassesToBtn = (elem, index) => {
  switch (index) {
    case 0:
      nameClassesBtn(elem, "btn-go", "Go");
      break;
    case 1:
      nameClassesBtn(elem, "btn-reset", "Reset");
      break;
  }
};

let buttons = document.querySelectorAll(".btn");
buttons.forEach(addClassesToBtn);

// рандомно находим значения
let getRandomNumber = (min, max) => {
  let random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
};

// передача рандомного числа кубику
const setNumberCube = () => {
  let number = getRandomNumber(1, 6);
  cube.src = `./img/${number}.png`;
  return number;
};

// события
let btnStart = document.querySelector(".btn-go");
let btnReset = document.querySelector(".btn-reset");

const goGame = () => {
  let number = setNumberCube();
  let fishkaLeft = parseInt(getComputedStyle(fishka).left);
  let fishkaMover = fishkaLeft + number * moveStep;
  if (fishkaMover > maxLeft) {
    result.innerHTML = "Gave over. Try again!";
  } else if (fishkaMover === maxLeft) {
    result.innerHTML = "Gave over. You are a Winner!";
    fishka.style.left = `${fishkaMover}px`;
  } else {
    fishka.style.left = `${fishkaMover}px`;
  }
};

const resetGame = () => {
  fishka.style.left = `${startLeftPosition}px`;
  cube.src = `./img/${numberCube}.png`;
  result.innerHTML = "Start game!";
};

btnStart.addEventListener("click", goGame);
btnReset.addEventListener("click", resetGame);
