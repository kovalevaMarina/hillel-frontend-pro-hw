// Задача 1. Дан HTML код. Поменяйте содержимое элементов с классом zzz
//на их порядковый номер в коде.

function changeElementText() {
  var elems = document.getElementsByClassName("zzz");
  for (var i = 0; i < elems.length; i++) {
    elems[i].innerHTML = i + 1;
  }
}
changeElementText();

// Задача 2. Дан HTML код. Поменяйте цвет текста на синий у элементов с текстом www.

function changeColorText() {
  var children = document.body.children;
  for (node of children) {
    if (node.textContent.includes("www")) {
      node.style.color = "blue";
    }
  }
}
changeColorText();

// Задача 3. Дан HTML код. Сгенерируйте новый список (ul > li) используя содержимое элементов с классом zzz.

function createList() {
  var items = document.querySelectorAll(".zzz");
  var ul = document.createElement("ul");
  var body = document.body;
  body.prepend(ul);

  function createListItem(item) {
    var li = document.createElement("li");
    ul.append(li);
    var textValue = item.textContent;
    li.textContent = textValue;
  }
  items.forEach(createListItem);
}
createList();
