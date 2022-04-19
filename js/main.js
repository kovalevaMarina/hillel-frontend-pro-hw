// Задача 1. "Треугольник"
var lines = 7,
  sign = "",
  result = "";

for (var i = 0; i < lines; i++) {
  sign += "#";
  result += sign + "\n";
}
console.log(result);

// Задача 2. "Не скучай"
var res = "";

for (var i = 0; i < 12; i++) {
  var str = "";
  for (var j = 0; j < 28; j++) {
    if (i === 1 && j >= 5 && j <= 21) {
      str += " ";
    } else if (i === 2) {
      if (j >= 5 && j <= 7) {
        str += "*";
      } else if (j === 24 || j === 25) {
        str += "*";
      } else if (j >= 2 && j <= 23) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 3) {
      if (j === 7 || j === 8) {
        str += "*";
      } else if (j === 4 || j === 25) {
        str += "*";
      } else if (j === 18 || j === 19) {
        str += "*";
      } else if (j === 22) {
        str += "O";
      } else if (j >= 2 && j <= 4) {
        str += " ";
      } else if (j >= 9 && j <= 25) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 4) {
      if (j >= 5 && j <= 7) {
        str += "*";
      } else if (j === 13) {
        str += "O";
      } else if (j === 20 || j === 21) {
        str += "*";
      } else if (j === 26) {
        str += "*";
      } else if (j >= 1 && j <= 17) {
        str += " ";
      } else if (j >= 22 && j <= 25) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 5) {
      if (j === 8) {
        str += "O";
      } else if (j >= 20 && j <= 22) {
        str += "*";
      } else if (j >= 1 && j <= 17) {
        str += " ";
      } else if (j >= 23 && j <= 26) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 6) {
      if (j === 20 || j === 21) {
        str += "*";
      } else if (j >= 1 && j <= 17) {
        str += " ";
      } else if (j >= 22 && j <= 26) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 7) {
      if (j === 4) {
        str += "O";
      } else if (j === 13) {
        str += "*";
      } else if (j >= 1 && j <= 11) {
        str += " ";
      } else if (j >= 14 && j <= 26) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 8) {
      if (j === 1) {
        str += "*";
      } else if (j === 13 || j === 14) {
        str += "*";
      } else if (j === 22) {
        str += "O";
      } else if (j >= 2 && j <= 11) {
        str += " ";
      } else if (j >= 15 && j <= 26) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 9) {
      if (j >= 1 && j <= 3) {
        str += "*";
      } else if (j === 14 || j === 15) {
        str += "*";
      } else if (j === 25 || j === 26) {
        str += "*";
      } else if (j === 20) {
        str += "O";
      } else if (j >= 4 && j <= 11) {
        str += " ";
      } else if (j >= 16 && j <= 24) {
        str += " ";
      } else {
        str += "#";
      }
    } else if (i === 10) {
      if (j >= 2 && j <= 5) {
        str += "*";
      } else if (j >= 14 && j <= 16) {
        str += "*";
      } else if (j === 24) {
        str += "*";
      } else if (j >= 6 && j <= 10) {
        str += " ";
      } else if (j >= 17 && j <= 23) {
        str += " ";
      } else {
        str += "#";
      }
    } else {
      str += "#";
    }
  }
  res = res + str + "\n";
}
console.log(res);
