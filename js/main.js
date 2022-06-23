var slides = [
  "https://picsum.photos/500/500",
  "https://picsum.photos/600/600",
  "https://picsum.photos/700/700",
];

let body = document.body;

let slider = document.createElement("div");
slider.className = "slider";

let sliderWrap = document.createElement("div");
sliderWrap.className = "slider__wrap";

let sliderField = document.createElement("div");
sliderField.className = "slider__field";

let arrowLeft = document.createElement("button");
arrowLeft.className = "slider__btn btn-left";
arrowLeft.innerHTML = "<";

let arrowRight = document.createElement("button");
arrowRight.className = "slider__btn btn-rigth";
arrowRight.innerHTML = ">";

let ul = document.createElement("ul");
ul.className = "slider-list";

let sliderDots = document.createElement("div");
sliderDots.className = "slider__dots";

body.prepend(slider);
slider.prepend(sliderField);
sliderField.prepend(sliderWrap);
sliderWrap.before(arrowLeft);
sliderWrap.after(arrowRight);
sliderWrap.prepend(ul);
slider.append(sliderDots);

for (let i = 0; i < slides.length; i++) {
  let li = document.createElement("li");
  li.className = "slider-list__item";

  let img = document.createElement("img");
  img.className = "item-img";
  img.setAttribute("src", slides[i]);

  let dots = document.createElement("button");
  dots.className = "slider__dots--item";

  ul.prepend(li);
  li.prepend(img);
  sliderDots.prepend(dots);
}

const buttons = document.querySelectorAll(".slider__btn");
const items = document.querySelectorAll(".slider-list__item");
const mover = document.querySelector(".slider-list");
const dotsBtn = document.querySelectorAll(".slider__dots--item");

const dotsFirstActive = document
  .querySelectorAll(".slider__dots--item")[0]
  .classList.add("dots-active");

let count = 0;
items[count].classList.add("active");

const moveRight = () => {
  const active = mover.querySelector(".active");
  const next = active.nextElementSibling;
  const dotActive = document.querySelector(".dots-active");
  const dotNext = dotActive.nextElementSibling;

  let width = 0;
  if (next) {
    width = getComputedStyle(next).width;
    count++;
    active.classList.remove("active");
    next.classList.add("active");
    dotActive.classList.remove("dots-active");
    dotNext.classList.add("dots-active");
  } else {
    count = 0;
    active.classList.remove("active");
    items[count].classList.add("active");
    dotActive.classList.remove("dots-active");
    dotsBtn[count].classList.add("dots-active");
  }
  mover.style.transform = `translateX(${-parseInt(width) * count}px)`;
};

const moveLeft = () => {
  const active = mover.querySelector(".active");
  const prev = active.previousElementSibling;
  const dotActive = document.querySelector(".dots-active");
  const dotPrev = dotActive.previousElementSibling;
  let width = getComputedStyle(items[0]).width;
  if (prev) {
    width = getComputedStyle(prev).width;
    count--;
    active.classList.remove("active");
    prev.classList.add("active");
    dotActive.classList.remove("dots-active");
    dotPrev.classList.add("dots-active");
  } else {
    count = slides.length - 1;
    active.classList.remove("active");
    items[count].classList.add("active");
    dotActive.classList.remove("dots-active");
    dotsBtn[count].classList.add("dots-active");
  }
  mover.style.transform = `translateX(${-parseInt(width) * count}px)`;
};

buttons.forEach((button) => {
  if (button.classList.contains("btn-rigth")) {
    button.addEventListener("click", moveRight);
  } else {
    button.addEventListener("click", moveLeft);
  }
});
