const pagination = {
  limit: 30,
  offset: 30,
  page: 1,
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
  cardWrap = document.querySelector(".card-wrap"),
  btnsTypesWrap = document.querySelector(".btns-types_wrap"),
  btnsRegionWrap = document.querySelector(".btns-region_wrap");
const url = "https://pokeapi.co/api/v2";

// список всех Pokemons
const getPokemons = () => {
  let customLink = `?limit=${pagination.limit}&offset=${
    pagination.offset * (pagination.page - 1)
  }`;
  fetch(`${url}/pokemon${customLink}`)
    .then((res) => res.json())
    .then((allpokemons) => {
      const { results } = allpokemons;
      results.forEach((pokemon) => {
        fetchPokemonData(pokemon);
      });
      const { count } = allpokemons;
      let num = count / pagination.limit;
      createPages(num);
      const btnsPag = document.querySelectorAll(".btn-pag");
      btnsPag.forEach((btnPag, i) => {
        btnPag.setAttribute("data-id", i + 1);
        btnPag.addEventListener("click", (e) => {
          e.preventDefault();
          btnsPagWrap.innerHTML = "";
          pagination.page = parseInt(btnPag.getAttribute("data-id"));
          getPokemons();
        });
      });
    });
};

getPokemons();

// выводим id по каждому Pokemons
const fetchPokemonData = (pokemon) => {
  cardWrap.innerHTML = "";
  let urlData = pokemon.url;
  fetch(urlData)
    .then((result) => result.json())
    .then((pokeData) => {
      const { sprites = {}, species = {} } = pokeData;
      const { front_default } = sprites;
      const { url } = species;
      renderPokemon(pokeData, front_default);
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          const { evolution_chain } = res;
          const { url } = evolution_chain;
          let btnEvol = document.querySelector(`[data-id="${pokeData.id}"]`);
          btnEvol.addEventListener("click", () => {
            fetch(url)
              .then((res) => res.json())
              .then((res) => {
                const { chain } = res;
                let arrEvol = [];
                const getPokeEvol = (chain) => {
                  if (chain.evolves_to.length) {
                    getPokeEvol(chain.evolves_to[0]);
                  }
                  arrEvol.push(chain.species.name);
                };
                getPokeEvol(chain);
                let cardElem = document.querySelector(".card");
                createElement(
                  "p",
                  "txt-evol",
                  cardElem,
                  null,
                  arrEvol.join(", ")
                );
              });
          });
        });
    })
    .catch(() => {
      console.log("Not found pokemon");
    });
};

// создание Pokemons в DOM
const renderPokemon = (pokeData, srcImage) => {
  const card = createElement("div", "card", cardWrap);
  createElement("h3", "title-h3", card, null, pokeData.name);
  createElement("p", "card-num", card, null, `#${pokeData.id}`);

  createPokeImg(srcImage, card, pokeData.name);

  createElement(
    "h4",
    "title-h4",
    card,
    null,
    `Height: <span>${pokeData.height}</span>`
  );
  createElement(
    "h4",
    "title-h4",
    card,
    null,
    `Weight: <span>${pokeData.weight}</span>`
  );

  createPokeTypes(pokeData.types, card);

  const btnWrap = createElement("div", "btn-wrap", card);

  createElement("button", "btn-favorite", btnWrap, null, `&#10084`);
  const btnEvolution = createElement(
    "button",
    "btn-evolution",
    btnWrap,
    null,
    "Evolution"
  );
  btnEvolution.setAttribute("data-id", pokeData.id);
};

// выводим картинку по каждому Pokemons
const createPokeImg = (src, wrapper, pokeName) => {
  const cardImgWrap = createElement("div", "card-img_wrap", wrapper);
  createElement("img", "card-img", cardImgWrap, src, pokeName);
};

// пагинация
const btnsPagWrap = createElement("div", "btns-wrap", container);

const createPages = (count) => {
  for (let i = 1; i <= count; i++) {
    createElement("button", "btn-pag", btnsPagWrap, null, i);
  }
};

// сортировка по типам Pokemons
const createPokeTypes = (types, append) => {
  const typesList = createElement(
    "ul",
    "card-list_wrap",
    append,
    null,
    "Types:"
  );
  types.forEach((type) => {
    createElement(
      "li",
      "card-list_item",
      typesList,
      null,
      `&#10003; ${type.type.name}`
    );
  });
};

const fetchPokemonTypes = () => {
  fetch(`${url}/type`)
    .then((res) => res.json())
    .then((alltypes) => {
      const { results: types } = alltypes;
      createElement("h2", "title-h2", btnsTypesWrap, null, "Choose by type:");
      types.forEach((type) => {
        const btnsType = createElement(
          "button",
          "btn-type",
          btnsTypesWrap,
          null,
          type.name
        );
        btnsType.addEventListener("click", (e) => {
          cardWrap.innerHTML = "";
          let btnType = e.target;
          btnType.innerHTML = `&#10003; ${type.name}`;
          fetch(type.url)
            .then((res) => res.json())
            .then((res) => {
              const { pokemon } = res;
              pokemon.forEach((elem) => {
                fetchPokemonData(elem.pokemon);
              });
            });
        });
      });
    });
};
fetchPokemonTypes();

// сортировка по регионам Pokemons
const fetchPokemonRegion = () => {
  fetch(`${url}/region`)
    .then((res) => res.json())
    .then((allregions) => {
      const { results: regions } = allregions;
      createElement(
        "h2",
        "title-h2",
        btnsRegionWrap,
        null,
        "Choose by region:"
      );
      regions.forEach((region) => {
        const btnsRegion = createElement(
          "button",
          "btn-region",
          btnsRegionWrap,
          null,
          region.name
        );
        btnsRegion.addEventListener("click", (e) => {
          cardWrap.innerHTML = "";
          let btnsRegion = e.target;
          btnsRegion.innerHTML = `&#10003; ${region.name}`;
          fetch(region.url)
            .then((res) => res.json())
            .then((res) => {
              const { pokedexes } = res;
              pokedexes.forEach((pokedex) => {
                fetch(pokedex.url)
                  .then((res) => res.json())
                  .then((res) => {
                    const { pokemon_entries } = res;
                    pokemon_entries.forEach((entr) => {
                      const namePoke = entr.pokemon_species.name;
                      const urlPoke = `${url}/pokemon/${namePoke}`;
                      fetchPokemonData({ url: urlPoke });
                    });
                  });
              });
            });
        });
      });
    });
};
fetchPokemonRegion();

// вывод всех эволюций
