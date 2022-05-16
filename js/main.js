function isCompare(data1, data2) {
  // получить тип
  function getType(type) {
    return Object.prototype.toString
      .call(type)
      .replace("[object ", "")
      .replace("]", "");
  }
  // проверка на объект
  function isObject(obj) {
    return getType(obj) === "Object";
  }
  // проверка на массив
  function isArray(arr) {
    return getType(arr) === "Array";
  }
  // проверка на другое
  function isOther(type1, type2) {
    return getType(type1) === getType(type2);
  }

  // ------------------- логика выполнения сравнений
  // 1. cравнение для примитивов по факту
  if (data1 === data2) {
    return true;
  }
  // 2. проверка на объект и массив
  if (
    !isObject(data1) &&
    !isArray(data1) &&
    !isObject(data2) &&
    !isArray(data2)
  ) {
    return false;
  }
  // 3. Убедиться, что это два с одинаковым типом, т.е. и то и то объект или массив
  if (
    !isOther(data1, data2) ||
    Object.keys(data1).length !== Object.keys(data2).length
  ) {
    return false;
  }
  // 4. Равны ли объекты или нет
  for (var key of Object.keys(data1)) {
    // сравнение ключей объекта
    if (!data2.hasOwnProperty(key)) {
      return false;
    }
    // сравнение значений объекта
    if (!isCompare(data1[key], data2[key])) {
      return false;
    }
  }
  // вместо for можно использовать JSON.toString()
  if (JSON.toString(data1) !== JSON.toString(data2)) {
    return false;
  }
  return true;
}

// сравнение должно быть, как по типу, так и по значению
console.log(isCompare(5, 5)); // сравнение 1 true
console.log(isCompare(5, 6)); // сравнение 1 false
console.log(isCompare(null, null)); // сравнение 1 true
console.log(isCompare(null, {})); // сравнение 1 false
console.log(isCompare([], {})); // сравнение 1 false
console.log(isCompare({ a1: 1, b: 2 }, { a1: 1, b: 2 })); // сравнение 1 false. Result true after условий
console.log(isCompare([1, 2, 3], [1, 2, 3])); // сравнение 1 false. Result true after условий
console.log(isCompare([1, 2, 3, 4, { c: 3 }], [1, 2, 3, 4, { c: 3 }]));
// проверка функции getType
console.log(
  Object.prototype.toString.call({}).replace("[object ", "").replace("]", "")
);

console.log(JSON.stringify([1, 2, 3, 4, { c: 13 }]));
