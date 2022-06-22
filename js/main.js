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
ul.className = "list";

let sliderDots = document.createElement("div");
sliderDots.className = "silder__dots";

body.prepend(slider);
slider.prepend(sliderField);
sliderField.prepend(sliderWrap);
sliderWrap.before(arrowLeft);
sliderWrap.after(arrowRight);
sliderWrap.prepend(ul);
slider.append(sliderDots);
