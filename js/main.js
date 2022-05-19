// Есть массив пользователей. Cгенерить DOM - элементы, и отобразить

var users = [
  {
    name: "Panda Vasya",
    url: "https://cutt.ly/Hn90ez7",
    description:
      "Несмотря на то, что панды относятся к отряду хищных, фактически они питаются почти исключительно (более чем на 99 %) бамбуком (любым из 25 видов, присутствующих в дикой среде обитания). В день взрослая панда съедает до 30 кг бамбука и побегов.",
  },
  {
    name: "Panda Petya",
    url: "http://desktopwallpapers.org.ua/large/201412/38708.jpg",
    description:
      "Несмотря на то, что панды относятся к отряду хищных, Для защиты от бамбуковых щепок пищевод и желудок выстланы толстым слоем упругой слизистой ткани. Если в каком-либо месте после цветения погибает весь бамбук, то живущим там пандам грозит смерть от голода",
  },
  {
    name: "Panda Fedya",
    url: "http://desktopwallpapers.org.ua/large/201305/26931.jpg",
    description:
      "Несмотря на то, что панды относятся к отряду хищных, (подобные случаи отмечались в 1975 и 1983 годах). По мнению некоторых учёных, гиперзависимость медведей от бамбука могла развиться относительно недавно — около 5000 лет назад[11]. Изредка включают в свой рацион растения других видов. Кроме того, как и все медвежьи, панды всеядны: при доступности едят яйца, мелких птиц, зверьков, рыбу и некоторых насекомых, иногда — падаль",
  },
];

users.forEach(function (item) {
  var bodyTag = document.querySelector("body");
  var elemName = document.createElement("h2");
  var elemPicture = document.createElement("img");
  var elemDescription = document.createElement("p");

  elemName.className = "title";
  elemPicture.className = "main-img";
  elemDescription.className = "main-desc";

  elemPicture.style.cssText = "width: 750px; height: 500px;";
  elemDescription.style.cssText = "max-width: 750px";

  elemName.innerHTML = item.name;
  bodyTag.append(elemName);

  elemPicture.setAttribute("src", item.url);
  elemName.after(elemPicture);

  elemDescription.innerHTML = item.description;
  elemPicture.after(elemDescription);
});
