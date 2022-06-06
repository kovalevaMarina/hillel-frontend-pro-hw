var productForm = document.forms.product;
var nameInput = productForm.name;
var descriptionMsg = productForm.description;
var priceInput = productForm.price;
var measureInput = productForm.measure;
var linkInput = productForm.link;
var submit = productForm.submit;

// проверка на Caps Lock для input/textarea
function capitalazeFirstLetters(str) {
  return str.replace(/([A-Z]|[А-ЯЁ])[A-ZА-ЯЁ]{1,}/g, function ($1) {
    return $1.charAt(0).toUpperCase() + $1.substr(1).toLowerCase();
  });
}

productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // название товара
  var regexName = /^.{1,25}/;
  var resultName = nameInput.value.match(regexName) || [];
  if (resultName.length == 0) {
    nameInput.style.borderColor = "red";
  } else {
    nameInput.value = capitalazeFirstLetters(resultName[0]);
    nameInput.style.borderColor = "black";
  }

  // цена товара
  var regexPrice = /(^\d{0,}(\,|\.)\d{2})|\d{1,}/;
  var resultPrice = priceInput.value.match(regexPrice) || [];
  if (resultPrice.length == 0) {
    priceInput.style.borderColor = "red";
  } else {
    priceInput.style.borderColor = "black";
    priceInput.value = resultPrice
      ? resultPrice[0]
      : Math.floor(priceInput * 100) / 100;
  }

  // единица измерения товара
  var regexMeasure = /^(шт|кг|л|ед)$/;
  var resultMeasure = measureInput.value.match(regexMeasure) || [];
  console.log(resultMeasure);
  if (resultMeasure.length == 0) {
    measureInput.style.borderColor = "red";
  } else {
    measureInput.value = resultMeasure[0];
    measureInput.style.borderColor = "black";
  }

  // описание товара
  var regexDesc = /^.{1,150}/;
  var resultDesc = descriptionMsg.value.match(regexDesc) || [];
  if (resultDesc.length == 0) {
    descriptionMsg.style.borderColor = "red";
  } else {
    descriptionMsg.value = capitalazeFirstLetters(resultDesc[0]);
    descriptionMsg.style.borderColor = "black";
  }

  // ссылка на товар
  var regexURL = /^(http|https)\:\/\//;
  !regexURL.test(linkInput.value)
    ? (linkInput.value = "https://" + linkInput.value)
    : linkInput.value;
});
