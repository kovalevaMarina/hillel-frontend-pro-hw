// Задача 1. Дан HTML код. Поменяйте содержимое элементов с классом zzz
//на их порядковый номер в коде.

// var elems = document.getElementsByClassName("zzz");
// for (var i = 0; i < elems.length; i++) {
//   elems[i].innerHTML = i + 1;
// }

// Задача 2. Дан HTML код. Поменяйте цвет текста на синий у элементов с текстом www.

var children = document.body.children;
for (node of children) {
  if (node.textContent.includes("www.")) {
    node.style.color = "blue";
  }
}

// Задача 3. Дан HTML код. Сгенерируйте новый список (ul > li) используя содержимое элементов с классом zzz.
