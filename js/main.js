/* Задача "Будильник".
Мы должны ввести время в формате (10:20, чч:мм). На странице отображаются часы с 
текущим временем. При достижении указанного времени выводим сообщение «Звонок»
*/

// Вариант 1
var timeAlarm = prompt(
  "Enter the time in hh:mm format what time you want to wake up"
);

function myClock() {
  var date = new Date();
  var currentHours = date.getHours();
  var currentMinutes = date.getMinutes();

  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }

  var currentTotalTime = currentHours + ":" + currentMinutes;
  document.getElementById("clock").innerHTML = currentTotalTime;

  if (currentTotalTime === timeAlarm) {
    alert("It's time to wake up!");
    clearInterval(clock);
  }
}
var clock = setInterval(myClock, 1000);

// Вариант 2
var timeAlarm2 = prompt(
  "Enter the time in hh:mm format what time you want to wake up"
);
var timeAlarm2Arr = timeAlarm2.split(":");

function myClock2() {
  var date = new Date();
  var currentTime = date.toLocaleTimeString();
  var currentTimeArr = currentTime.split(":");

  document.getElementById("clock").innerHTML = currentTime;

  if (
    timeAlarm2Arr[0] === currentTimeArr[0] &&
    timeAlarm2Arr[1] === currentTimeArr[1]
  ) {
    alert("It's time to wake up!");
    clearInterval(clock2);
  }
}
var clock2 = setInterval(myClock2, 1000);
