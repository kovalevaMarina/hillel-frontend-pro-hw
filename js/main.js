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
  $(".send").on("click", function () {
    var valueInput = $(".myLetter").val();

    if (valueInput === "") {
      return $(".yakubovichSay").text("Введите букву.");
    }
    letters.forEach((letter, index) => {
      if (valueInput === letter) {
        var addLetter = $("#" + index).text(valueInput);
        addLetter.css("color", "white");
        $(".yakubovichSay").text("Вы угадали!Крутите барабан опять.");
        $(".myLetter").val("");
      }
    });
    if (!letters.includes(valueInput)) {
      $(".yakubovichSay").text("Это не верная буква.");
    }
  });

  // крутить барабан
  //   function spinDrum(e) {
  //     e.preventDefault();
  //     $(".yakubovichSay").text("");
  //     let dok = 16 - opt.cell;
  //     opt.cell = Math.floor(Math.random() * opt.section + 1);
  //     let col = Math.floor(Math.random() * 2 + 4);
  //     opt.proc += (opt.cell + col * 16 + dok) * 30;
  //   }

  //   $(".roll").on("click", spinDrum);
});
