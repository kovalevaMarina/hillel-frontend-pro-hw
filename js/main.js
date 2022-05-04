/*
Задача 1. Дан массив пользователей [{name: 'Vasya', age: 24}, 
{name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, 
{name: 'Nastya', age: 40} ]. Отсортируйте его по возрасту.
*/

var arr = [
  { name: "Vasya", age: 24 },
  { name: "Petya", age: 12 },
  { name: "Fedya", age: 6 },
  { name: "Ann", age: 18 },
  { name: "Nastya", age: 40 },
];

arr.sort(function (a, b) {
  return a.age - b.age;
});

console.log(arr);

/*
Задача 2. Напишите функцию filterFalse(arr), которая очищает массив от ложных 
(false) значений: false, null, undefined, 0, –0, NaN и "" (пустая строка).
*/

var arrNum = [NaN, 0, 77, false, -17, "", undefined, 99, null];
function filterFalse(arrNum) {
  var result = arrNum.filter(function (item) {
    return (
      item !== null &&
      item !== undefined &&
      item !== 0 &&
      item !== false &&
      item !== "" &&
      item > 0 &&
      !isNaN(item)
    );
  });

  return result;
}
console.log(filterFalse(arrNum));

// или

function filterFalse(arrNum) {
  var result = arrNum.filter(function (item) {
    if (item && item > 0) {
      return item;
    }
  });

  return result;
}
console.log(filterFalse(arrNum));

/*
Задача 3. Напишите функцию find(arr, value), которая вернет массив всех 
индексов значения. (Не использовать метод find).
*/

var arr2 = [4, 0, 20, 10, null, "string", 20, NaN, 20, undefined, 20];

function find(arr2, value) {
  var resultIndex = [];
  for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] === value) {
      resultIndex.push(i);
    }
  }
  return resultIndex;
}

console.log(find(arr2, 20));

/*
Задача 4. Создать функцию createMatrix(row, col), принимающую количество строк и количество 
столбцов матрицы и возвращающее матрицу (массив массивов), заполненную случайными числами 
в диапазоне от 0 до 100 (random).
*/

function createMatrix(row, col) {
  var resultMatrix = [];

  for (var i = 0; i < row; i++) {
    resultMatrix[i] = [];
    for (var j = 0; j < col; j++) {
      var random = Math.ceil(Math.random() * 100);
      resultMatrix[i].push(random);
    }
  }

  return resultMatrix;
}
console.log(createMatrix(4, 6));

/*
Задача 5. 
Реализуйте функцию flatten(), которая в случае, если массив обладает уровнями вложенности, приведёт 
его к элементарному виду (вложенность может быть любой глубины).
Пример: flatten([1, [2], [3, [4]]]) вернёт [1, 2, 3, 4]
*/

var arrFlatten = [1, [2], [3, [4, [true, 56], ["string", 8], [28]]]];

function flatten(arrFlatten) {
  var resultFlatten = [];

  for (var i = 0; i < arrFlatten.length; i++) {
    var element = arrFlatten[i];
    if (Array.isArray(element)) {
      resultFlatten = resultFlatten.concat(flatten(element));
    } else {
      resultFlatten.push(element);
    }
  }

  return resultFlatten;
}
console.log(flatten(arrFlatten));
