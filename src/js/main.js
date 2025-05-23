"use strict";
const formAnime = document.querySelector(".js-formAnime");
const animelistUl = document.querySelector(".js-animelistUl");
const animelistfavoritesUl = document.querySelector(".js-animelistfavoritesUl");
const textSearchInput = document.querySelector(".js-textSearchInput");
const btnSearch = document.querySelector(".js-btnSearch");
const btnReset = document.querySelector(".js-btnReset");

// DATOS DE LA APLICACIÓN

let allAnimes = [];
let animeFavorites = [];
const specialTypes = ["OVA", "Movie", "TV"];

// FUNCIONES

function renderOneAnime(oneAnime) {
  const animePositionFromFavs = animeFavorites.findIndex(
    (oneAnimeFav) => oneAnimeFav.mal_id === oneAnime.mal_id
  );

  if (animePositionFromFavs === -1) {
    const html = `
      <li class="anime__item js-animeLi" data-id=${oneAnime.mal_id}>
        <div class="anime__chromo">
          <h2 class="title__anime-item">${oneAnime.title}</h2>
          <p class="js-type">${oneAnime.type}</p>
          <img src=${oneAnime.images.jpg.image_url} />
        </div>
      </li>
    `;
    return html;
  } else {
    const html = `
      <li class="anime__item js-animeLi favoriteAnime" data-id=${oneAnime.mal_id}>
        <div class="anime__chromo">
          <span class="deleteIcon js-deleteIcon" id=${oneAnime.mal_id}>
            <i class="fa-solid fa-square-xmark"></i>
          </span>
          <h2 class="title__anime-item">${oneAnime.title}</h2>
          <p class="js-type">${oneAnime.type}</p>
          <img src=${oneAnime.images.jpg.image_url} />
        </div>
      </li>
    `;
    return html;
  }
}

function renderAllAnimes() {
  let html = "";

  for (const oneAnime of allAnimes) {
    html += renderOneAnime(oneAnime);
  }

  animelistUl.innerHTML = html;

  const allAnimesLi = document.querySelectorAll(".js-animelistUl .js-animeLi");
  for (const animeLi of allAnimesLi) {
    animeLi.addEventListener("click", handleClickAnime);
  }
}

function renderAllAnimesFavs() {
  let html = "";

  for (const oneAnime of animeFavorites) {
    html += renderOneAnime(oneAnime);
  }

  animelistfavoritesUl.innerHTML = html;

  const deleteArray = document.querySelectorAll(".js-deleteIcon");
  for (const eachCross of deleteArray) {
    eachCross.addEventListener("click", handleClickCross);
  }
}

function handleClickAnime(ev) {
  // Detecta un elemento clicado por el usuario
  const clickedLi = ev.currentTarget;

  // AL elemento seleccionado, se le añade la clase favoriteAnime
  clickedLi.classList.toggle("favoriteAnime");

  // Obtiene el id del atributo seleccionado y se aplica parseInt para pasar de string a número
  const anime_id = parseInt(clickedLi.dataset.id);

  const animePositionFromFavs = animeFavorites.findIndex(
    (oneAnime) => oneAnime.mal_id === anime_id
  );

  if (animePositionFromFavs === -1) {
    // Recorre el array de animes comparando los id, se queda con el objeto que sea exactamente igual que el seleccionado por el usuario y lo devuelve
    const clickedAnimeSelected = allAnimes.find(
      (oneAnime) => oneAnime.mal_id === anime_id
    );
    // Agrega el objeto encontrado al array de animes favoritos
    animeFavorites.push(clickedAnimeSelected);
  } else {
    animeFavorites.splice(animePositionFromFavs, 1);
  }

  localStorage.setItem("favoritesAnimes", JSON.stringify(animeFavorites));
  renderAllAnimesFavs();
}

const handleClickCross = (ev) => {
  const id = parseInt(ev.currentTarget.id);
  const deleteCrossIndex = animeFavorites.findIndex(
    (oneAnime) => oneAnime.mal_id === id
  );
  animeFavorites.splice(deleteCrossIndex, 1);
  renderAllAnimesFavs();
  renderAllAnimes();
};

// CUANDO CARGA LA PÁGINA

fetch(`https://api.jikan.moe/v4/anime`)
  .then((res) => res.json())
  .then((data) => {
    allAnimes = data.data;

    renderAllAnimes();
  });

// Obtenemos los animes favoritos desde el LS
const favsFromLS = JSON.parse(localStorage.getItem("favoritesAnimes"));

if (favsFromLS !== null) {
  animeFavorites = favsFromLS;
  renderAllAnimesFavs();
}
// Filtro con API
function handleClickSearchButton(ev) {
  ev.preventDefault();

  const searchByUser = textSearchInput.value;

  fetch(`https://api.jikan.moe/v4/anime?q=${searchByUser}`)
    .then((res) => res.json())
    .then((data) => {
      allAnimes = data.data;

      renderAllAnimes();
    });
}

function handleClickResetButton(ev) {
  ev.preventDefault();
  formAnime.reset();
  animeFavorites = [];
  localStorage.clear();
  document
    .querySelectorAll(".favoriteAnime")
    .forEach((li) => li.classList.remove("favoriteAnime"));
  renderAllAnimesFavs();
}

btnSearch.addEventListener("click", handleClickSearchButton);
btnReset.addEventListener("click", handleClickResetButton);
