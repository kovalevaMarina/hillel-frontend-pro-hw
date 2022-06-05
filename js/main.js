var productForm = document.forms.product;
var nameInput = productForm.name;
var descriptionMsg = productForm.description;
var priceInput = productForm.price;
var measureInput = productForm.measure;
var linkInput = productForm.link;

// проверка на Caps Lock для input/textarea

function capitalazeFirstLetters(str) {
  return str.replace(/([A-Z]|[А-ЯЁ])[A-ZА-ЯЁ]{1,}/g, function ($1) {
    var resultStr = $1.charAt(0).toUpperCase() + $1.substr(1).toLowerCase();
    return resultStr;
  });
}

nameInput.addEventListener("change", function (e) {
  var regex = /^.{1,25}/;
  var result = e.target.value.match(regex) || [];
  e.target.value = capitalazeFirstLetters(result[0]);
});

descriptionMsg.addEventListener("change", function (e) {
  var regexDesc = /^.{1,150}/;
  var resultDesc = e.target.value.match(regexDesc);
  e.target.value = capitalazeFirstLetters(resultDesc[0]);
});

measureInput.addEventListener("change", function (e) {
  var regexMeasure = /^(шт|кг|л|ед)$/;
  var resultMeasure = e.target.value.match(regexMeasure) || [];
  if (resultMeasure[0]) {
    e.target.value = resultMeasure[0];
    measureInput.style.borderColor = "black";
  } else {
    measureInput.style.borderColor = "red";
  }
});

priceInput.addEventListener("change", function (e) {
  var regexPrice = /^\d*(\,|\.)\d{2}/;
  var resultPrice = e.target.value.match(regexPrice) || [];
  e.target.value = resultPrice
    ? resultPrice[0]
    : Math.floor(e.target.value * 100) / 100;
  console.log(resultPrice);
});

// e.target.value + ".00"

// function isValidURL(string) {
//   var res = string.test(/http\:\/\//g);
//   return res !== null;
// }
// console.log(isValidURL("http://www.nine.com.ua/uk"));
