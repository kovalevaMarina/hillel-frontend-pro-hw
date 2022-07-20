$(document).ready(function () {
  //создаем массив объектов, с вопросами и ответами
  const storeGame = [
    {
      question: "Какое самое маленькое государство в мире?",
      answer: "Ватикан",
    },
    {
      question:
        "Как называется железная дорога с канатной тягой, устраиваемая на крутых подьемах",
      answer: "Фуникулер",
    },
    {
      question: "В какой стране были проведены первые Олимпийские игры?",
      answer: "Греция",
    },
    {
      question: "Какая самая маленькая птица в мире?",
      answer: "Колибри",
    },
    {
      question: "Что является национальным животным Шотландии?",
      answer: "Единорог",
    },
  ];

  const opt = {
    cell: 0, // ячейка
    section: 16, // к-во ячеек
    item: 360 / 16,
    proc: 0,
    score: 0,
    timerIntervalsIds: [],
  };

  // рандомно выбираем объект из массива
  function getRandomNum(length) {
    return Math.floor(Math.random() * length);
  }

  // генерация количества букв от сгенерированого от ответа.
  var randomNum = getRandomNum(storeGame.length);
  var randomValue = storeGame[randomNum];

  $(".wrapQuest").append(randomValue.question);
  var letters = randomValue.answer.toLowerCase().split("");

  const addLetters = () => {
    $(".itemLetter").remove();
    letters.forEach((_letter, i) => {
      $(".wrapLetters").append("<li class='itemLetter' id='" + i + "'></li>");
    });
  };
  addLetters();

  // проверка введенной буквы игрока в ответе
  let checkLetterInWord = () => {
    var valueInput = $(".myLetter").val();

    if (valueInput === "") {
      return $(".yakubovichSay").text("Введите букву.");
    }

    letters.forEach((letter, index) => {
      if (valueInput === letter) {
        opt.timerIntervalsIds.forEach(clearInterval);
        var addLetter = $("#" + index).text(valueInput);
        addLetter.css("color", "white");
        addLetter.addClass("opened");
        $(".yakubovichSay").text("Вы угадали!Крутите барабан опять.");
        $(".myLetter").val("");
        $(".send").prop("disabled", true);
      }
    });

    if (letters.length === $(".opened").length) {
      return gameOver();
    }

    if (!letters.includes(valueInput)) {
      $(".yakubovichSay").text("Это не верная буква. Вы проиграли.");
      $(".myLetter").val("");
      gameOver();
    }
  };

  $(".send").on("click", checkLetterInWord);
  $(".send").prop("disabled", true);

  // таймер
  let timerGame = () => {
    let timerValue = $(".timer").text();
    if (timerValue > 0) {
      timerValue--;
      $(".timer").text(timerValue);
    } else {
      gameOver();
    }
  };

  // крутить барабан
  function spinDrum(e) {
    e.preventDefault();
    $(".timer").text(10);
    $(".yakubovichSay").text("");
    let dok = 16 - opt.cell;
    opt.cell = Math.floor(Math.random() * opt.section + 1);
    let col = Math.floor(Math.random() * 2 + 4);
    opt.proc += (opt.cell + col * 16 + dok) * 22.5;
    $(".baraban").animate(
      { textIndent: opt.proc },
      {
        duration: 100,
        complete: function () {
          switch (opt.cell) {
            case 3:
              opt.score += 700;
              break;
            case 5:
              opt.score += 1000;
              break;
            case 11:
              opt.score += 400;
              break;
            case 1:
              opt.score += 200;
              break;
            case 10:
              opt.score += 1;
              break;
            case 7:
              opt.score *= 2;
              break;
            case 2:
              opt.score *= 3;
              break;
            case 9:
              opt.score += 800;
              break;
            case 6:
              opt.score += 100;
              break;
            case 12:
              opt.score += 900;
              break;
            case 4:
              opt.score += 0;
              break;
            case 8:
              opt.score += 600;
              break;
            case 13:
              opt.score += 0;
              break;
            case 14:
              break;
            case 15:
              opt.score += 500;
              break;
            case 16:
              opt.score += 300;
              break;
          }
          $(".score").text(opt.score);
          $(".send").prop("disabled", false);
          opt.timerIntervalsIds.push(setInterval(timerGame, 1000));
        },
        easing: "swing",
        step: function (now) {
          $(this).css("-webkit-transform", "rotate(" + now + "deg)");
        },
      }
    );
  }

  $(".roll").on("click", spinDrum);

  // конец игры
  const gameOver = () => {
    opt.timerIntervalsIds.forEach(clearInterval);
    $(".send").prop("disabled", true);
    $(".yakubovichSay").text("Игра окончена! Ваш результат:" + opt.score);
  };
});
