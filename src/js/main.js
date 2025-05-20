"use strict";

const animelistUl = document.querySelector(".js-animelistUl");
const animelistfavoritesUl = document.querySelector(".js-animelistfavoritesUl");
const textSearchInput = document.querySelector(".js-textSearchInput");
const btnSearch = document.querySelector(".js-btnSearch");
const btnReset = document.querySelector(".js-btnReset");

// DATOS DE LA APLICACIÓN

let allAnimes = [];

// const imageBroke = "";
// if (imageBroke !== oneAnime.images.jpg.image_url) {
//   imageBroke = `https://placehold.co/210x300/ffffff/555555?text=TV`;
// }

// FUNCIONES

function renderOneAnime(oneAnime) {
  const html = `
    <li class="anime__item js-animeLi" data-id=${oneAnime.mal_id}>
      <div class="anime__chromo">
        <h2 class="title__anime-item">${oneAnime.title}</h2>
        <img src=${oneAnime.images.jpg.image_url} />
      </div>
    </li>
  `;

  return html;
}

function renderAllAnimes() {
  let html = ""; //Creamos la variable vacía con let

  for (const oneAnime of allAnimes) {
    html += renderOneAnime(oneAnime); // Vamos acumulando aquí los li de cada uno de los elementos que genera oneAnime
  }

  animelistUl.innerHTML = html; // Cuando tenemos todos los li los ponemos en la página

  const allAnimesLi = document.querySelectorAll(".js-animeLi");
  for (const animeLi of allAnimesLi) {
    animeLi.addEventListener("click", handleClickAnime);
  }
}

function handleClickAnime(ev) {
  // Detecta un elemento clicado por el usuario
  const clickedLi = ev.currentTarget;
  // AL elemento seleccionado, se le añade la clase favoriteAnime
  clickedLi.classList.toggle("favoriteAnime");

  // Obtiene el id del atributo seleccionado y se aplica parseInt para pasar de string a número
  const anime_id = parseInt(clickedLi.dataset.id);
  console.log(anime_id);

  // Recorre el array de animes comparando los id, se queda con el que sea exactamente igual que el seleccionado por el usuario y lo devuelve
  const clickedAnimeSelected = allAnimes.find(
    (oneAnime) => oneAnime.mal_id === anime_id
  );

  console.log(clickedAnimeSelected);

  // Generamos otro li para los animes seleccionados
  const htmlOneAnime = renderOneAnime(clickedAnimeSelected);
  console.log(htmlOneAnime);

  // Añadimos los li seleccionados a la lista de favoritos
  animelistfavoritesUl.innerHTML += htmlOneAnime;
}

// CUANDO CARGA LA PÁGINA

fetch(`https://api.jikan.moe/v4/anime`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.data); El console nos sirve para ver qué elemento dentro de data contiene el array de elementos que nos interesan
    allAnimes = data.data;

    renderAllAnimes();
  });

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

btnSearch.addEventListener("click", handleClickSearchButton);

// Pasamos al apartado 3. Favoritos
// Consultar en qué imágenes tenemos qué reemplazar la url=
// https://via.placeholder.com/210x295//666666/?text=TV.
// 4. Bonus: Almacenamiento local
// 5. Bonus: Borrar favoritos
// 6. Bonus: Botón de reset
// 7. Bonus: Afinar maquetación
