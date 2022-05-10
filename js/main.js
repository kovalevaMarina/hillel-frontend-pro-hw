/*
Задача 1. Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, 
которая принимает введенную строку и возвращает булевое значение true, если введенная строка совпадает 
с паролем и false – если не совпадает.
*/

function makePassword(password) {
  return function checkPassword(input) {
    return input === password;
  };
}

var test = makePassword("kkk555");
console.log("no valid =>", test("hryflo"));
console.log("valid =>", test("kkk555"));

/*
Задание 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100, но так, чтобы 
они не повторялись, пока не будут перебраны все числа из этого промежутка. Решите задачу через замыкания - 
в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией.
*/

function getRandom() {
  var arrNumber = [];
  return function getNumbers() {
    var maxNumber = 100;
    var random = Math.ceil(Math.random() * maxNumber);
    if (arrNumber.length === maxNumber) {
      return "error";
    }
    if (arrNumber.includes(random)) {
      return getNumbers();
    } else {
      arrNumber.push(random);
      return random;
    }
  };
}

var test2 = getRandom();
for (var i = 0; i < 100; i++) {
  console.log(test2());
}
