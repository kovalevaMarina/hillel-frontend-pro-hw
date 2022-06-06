/* 
Задача 1. Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая 
найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
*/

function hometask1() {
  var string = "ahb acb aeb aeeb adcb axeb";
  var regex = /a.b/g;
  return string.match(regex);
}
console.log(hometask1());

/*
Задача 2. Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, 
которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.
*/

function hometask2() {
  var string = "*+ *q+ *qq+ *qqq+ *qqq qqq+'";
  var regex = /\*q{1,3}\+/g;
  return string.match(regex);
}
console.log(hometask2());

/*
Задача 3. Выбрать существующие даты между 1000 и 2012 годом. Секунды могут быть 
опущены. Облегчаем задачу: в каждом месяце 30 дней.
Результат:
2012/09/18 12:10 — true
2013/09/09 09:09 — false (после 2012)
*/

function hometask3() {
  var string1 = "2012/09/18 12:10"; // true
  var string2 = "2013/09/09 09:09"; // false
  var regex =
    /^([1000-2012]{4})\/[0-1][0-9]\/[0-3][0-9]\s[0-2][0-9]\:[0-5][0-9]/g;
  return regex.test(string1);
}
console.log(hometask3());

/*Задача 4. Убрать повторяющиеся пробелы и знаки табуляции, оставить по одному 
пробелу между словами и по два между предложениями.
Extra   spaces => Extra spaces
Sentence.   Sentence. => Sentence.  Sentence.
*/

function hometask4() {
  var string1 = "Extra   spaces";
  var string2 = "Sentence.   Sentence.";
  return string1.replace(/(\s{2,})|(\.\s{3,})/g, function (match) {
    return match.includes(".") ? ".  " : " ";
  });
}
console.log(hometask4());
