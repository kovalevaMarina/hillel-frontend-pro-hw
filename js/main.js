/*
  Задача 1.
  В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()). 
  Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», 
  «первое число меньше», «второе число меньше». Если пользователь ввёл не число, 
  выводится фраза «первый ввод – не число» (или «второй ввод – не число»), и выполнение 
  скрипта прекращается.
*/

var a, b;

for (;;) {
  a = +prompt("Введите первое число", 0);
  if (isNaN(a)) {
    alert("Первый ввод – не число");
    break;
  }

  b = +prompt("Введите второе число", 0);
  if (isNaN(b)) {
    alert("Второй ввод – не число");
    break;
  }
  compareNumbers(a, b);
}

function compareNumbers(a, b) {
  if (a === b) {
    alert("Числа равны");
  } else if (a < b) {
    alert("Первое число меньше");
  } else if (a > b) {
    alert("Второе число меньше");
  }
}

/*
Задача 2.
Многоквартирный дом характеризуется следующими тремя показателями: 
этажность (1-25), число подъездов (1-10), количество квартир на лестничной площадке (1-20). 
Скрипт запрашивает эти показатели и номер квартиры. Выводится номер подъезда, в котором 
находится указанная квартира. При вводе некорректных данных предусмотреть 
генерацию исключительных ситуаций.
*/

function getEntrance() {
  function isCheck(minNumber, maxNumber, value) {
    return (
      minNumber &&
      maxNumber &&
      value &&
      value >= minNumber &&
      value <= maxNumber
    );
  }

  var floorQuantity, entranceQuantity, flatQuantity;

  while (true) {
    floorQuantity = +prompt("Введите колличество этажей от 1 до 25");
    if (isCheck(1, 25, floorQuantity)) break;
    alert("Введите корректное значение");
  }

  while (true) {
    entranceQuantity = +prompt("Введите колличество подъездов от 1 до 10");
    if (isCheck(1, 10, entranceQuantity)) break;
    alert("Введите корректное значение");
  }

  while (true) {
    flatQuantity = +prompt(
      "Введите колличество квартир на лестничной площадке от 01 до 20"
    );
    if (isCheck(1, 20, flatQuantity)) break;
    alert("Введите корректное значение");
  }

  var flatCount = floorQuantity * entranceQuantity * flatQuantity;

  while (true) {
    var flatNumber = +prompt("Введите номер квартиры");
    if (flatNumber > flatCount || !flatNumber)
      alert("Вы ввели не допустимое значение");
    break;
  }

  for (entrance = 1; entrance <= entranceQuantity; entrance++) {
    if (flatNumber <= floorQuantity * flatQuantity * entrance) {
      alert("Ваша квартира находится в подъезде " + entrance);
      break;
    }
  }
}
getEntrance();

/*
  Задача 3.
  Написать функцию, получающую на вход два числа. 
  Если оба числа чётные - функция возвращает их произведение. 
  Если оба числа нечётные - функция возвращает их сумму. 
  Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
*/

function getNumber(num1, num2) {
  if (num1 % 2 === 0 && num2 % 2 === 0) {
    return num1 * num2;
  } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
    return num1 + num2;
  } else {
    return num1 % 2 ? num1 : num2;
  }
}
console.log(getNumber(6, 7));

/*
Задача 4
На декартовой плоскости прямоугольник задаётся четырьмя точками – своими вершинами 
(у каждой точки две числовые координаты). Вершины перечисляются последовательно, в порядке обхода 
по часовой стрелке, начиная с левой верхней вершины.
Написать функцию, проверяющую, образуют ли заданные восемь чисел вершины некоего прямоугольника.
*/

function checkRectangle() {
  var x1, x2, x3, x4, y1, y2, y3, y4;

  x1 = +prompt("Введите значение x1:");
  y1 = +prompt("Введите значение y1:");
  x2 = +prompt("Введите значение x2:");
  y2 = +prompt("Введите значение y2:");
  x3 = +prompt("Введите значение x3:");
  y3 = +prompt("Введите значение y3:");
  x4 = +prompt("Введите значение x4:");
  y4 = +prompt("Введите значение y4:");

  function isRectangle(x1, x2, x3, x4, y1, y2, y3, y4) {
    return x1 === x4 && y1 === y2 && x2 === x3 && y3 === y4;
  }

  isRectangle(x1, x2, x3, x4, y1, y2, y3, y4)
    ? alert("Фигура - прямоугольник")
    : alert("Не прямоугольник");
}
checkRectangle();

/*
Задача 5.
Функция getSequence(start, step) при вызове возвращает функцию-генератор. 
Каждый вызов генератора возвращает новое число в числовой последовательности. 
start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1).
*/

function getSequence(start, step) {
  start = start || 0;
  step = step || 1;
  return function createGenerator() {
    return (start = start + step);
  };
}
var test = getSequence(10, 5);
console.log(test());
console.log(test());
console.log(test());
