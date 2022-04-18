// ДЗ 3. Странный калькулятор
var operation,
    count,
    result;

for(;;) {
  operation = prompt("Выбирите любую из операций +, -, * или /")
  if (operation === "+" || operation === "-" || operation === "/" || operation === "*") break;
}

for(;;) {
  count = +prompt("Сколько операндов вы хотите использовать?")
  if (count > 1) break;
}

for(i = 0; i < count; i++) {
  var operand = +prompt("Введите каждый из операндов")
  if (i === 0) {
    result = operand; continue
  }
  switch(operation) {
    case "+": result += operand
      break;
    case "-": result -= operand 
      break;
    case "*": result *= operand
      break;
    case "/": result /= operand
      break;
  }
}

alert("Ваш результат " + result);
