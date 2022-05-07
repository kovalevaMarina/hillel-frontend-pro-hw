/*
Задача 1. Напишите функцию toSum для вычисления суммы массива целых чисел.
*/

var array = [2, 3, 4, 5, 6, 7];

function toSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    var elem = array[i];
    sum += elem;
  }
  return sum;
}
console.log(toSum(array));

// or

function toSum(array) {
  if (array.length == 1) {
    return array[0];
  }
  var item = array.shift();
  return item + toSum(array);
}
console.log(toSum(array));

/*
Задача 2. Ваша задача - сделать функцию, которая возвращает сумму последовательности 
целых чисел. Последовательность определяется тремя неотрицательными значениями: начало, 
конец, шаг. Если начальное значение больше конца, функция должна вернуть 0.
*/

function getSum(start, end, step) {
  if (!start || start < 0 || !end || end < 0 || !step || step < 0) {
    return "error";
  } else if (start > end) {
    return 0;
  } else {
    return start + getSum(start + step, end, step);
  }
}
console.log("start negative =>", getSum(-1, 10, 2));
console.log("end negative =>", getSum(1, -10, 2));
console.log("step zero =>", getSum(1, 10, 0));
console.log("valid =>", getSum(2, 20, 3));
console.log("start null =>", getSum(null, 20, 5));
