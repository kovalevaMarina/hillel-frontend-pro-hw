const status = {
  200: true,
  201: true,
  203: true,
};

const store = {
  pokemons: [],
};

const createElement = (tag, nameClass, parent, src = null, text = null) => {
  let elem = document.createElement(tag);
  elem.className = nameClass;
  if (src) {
    elem.src = src;
    elem.alt = text;
    elem.title = text;
  }
  if (!src && text) {
    elem.innerHTML = text;
  }
  parent.append(elem);
  return elem;
};

const container = document.querySelector(".container"),
  cardWrap = document.querySelector(".card-wrap");

const url = "https://pokeapi.co/api/v2";

// список всех Pokemons
const getNamePokemon = () => {
  return fetch(`${url}/pokemon`)
    .then((res) => res.json())
    .then((data) => {
      return Promise.all(
        data.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((json) => {
              store.pokemons.push(json);
              return json;
            });
        })
      );
    });
};

// выводим id по каждому Pokemons
const fetchPokemonData = (pokemon) => {
  let urlData = pokemon.url;
  fetch(urlData).then((result) => {
    result.json().then((pokeData) => {
      addPokeDataToStore(pokeData);
    });
  });
};

const addPokeDataToStore = (pokeData) => {
  store.pokemons.push(pokeData);
};

const renderPokemons = () => {
  store.pokemons.forEach((pokeData) => {
    const { sprites = {} } = pokeData;
    const { front_default } = sprites;
    const card = createElement("div", "card", cardWrap);
    createElement("h3", "title-h3", card, null, pokeData.name);
    createElement("p", "card-num", card, null, `#${pokeData.id}`);

    createPokeImg(front_default, card, pokeData.name);
  });
};

// выводим картинку по каждому Pokemons
const createPokeImg = (srcImage, wrapper, pokeName) => {
  const cardImgWrap = createElement("div", "card-img_wrap", wrapper);
  createElement("img", "card-img", cardImgWrap, srcImage, pokeName);
};

getNamePokemon().then(() => {
  renderPokemons();
});
