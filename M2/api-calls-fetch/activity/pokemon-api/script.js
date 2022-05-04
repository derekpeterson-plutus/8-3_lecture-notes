const BASE_URL =
  'https://pokeapi.co/api/v2/pokemon';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const { id } = event.target;
  console.log('This is the id:', id);
  getPokemonByID(id.value);
  id.value = '';
});

function getPokemonByID(id) {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((result) => {
      const pokemon =
        createPokemonArticle(result);
      document
        .querySelector(`.pokemon`)
        .append(pokemon);
    })
    .catch((error) => {
      const message = createErrorMessage(error);
      document
        .querySelector('main')
        .append(message);
    });
}

function createPokemonArticle(pokemon) {
  const article =
    document.createElement('article');
  article.innerHTML = `<img src="${pokemon.sprites.front_default}" alt="${pokemon.name}"/> <h2>${pokemon.name}(#${pokemon.order})</h2>`;
  return article;
}

// Fetch API data
fetch(BASE_URL + '/8')
  //get json from the response body
  .then((response) => {
    return response.json();
  })
  //process json to dom updates
  .then((json) => {
    console.log(json);
    //add helper function to process the dom update
  })
  //catch errors
  .catch((error) => {
    console.log(error);
    //add helper function to process the dom update error msg
  });
