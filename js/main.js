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
  fetch(`${url}/pokemon`).then((res) => {
    res.json().then((allpokemons) => {
      const { results } = allpokemons;
      results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
    });
  });
};

// выводим id по каждому Pokemons
const fetchPokemonData = (pokemon) => {
  let urlData = pokemon.url;
  fetch(urlData).then((result) => {
    result.json().then((pokeData) => {
      addPokeDataToStore(pokeData);
      renderPokemons(pokeData);
    });
  });
};

const addPokeDataToStore = (pokeData) => {
  store.pokemons.push(pokeData);
};

const renderPokemons = (pokeData) => {
  const { sprites = {} } = pokeData;
  const { front_default } = sprites;
  const card = createElement("div", "card", cardWrap);
  createElement("h3", "title-h3", card, null, pokeData.name);
  createElement("p", "card-num", card, null, `#${pokeData.id}`);

  createPokeImg(front_default, card, pokeData.name);
};

// выводим картинку по каждому Pokemons
const createPokeImg = (srcImage, wrapper, pokeName) => {
  const cardImgWrap = createElement("div", "card-img_wrap", wrapper);
  createElement("img", "card-img", cardImgWrap, srcImage, pokeName);
};

Promise.all([getNamePokemon()]).then(() => {
  console.log(store.pokemons);
});
