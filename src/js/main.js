"use strict";

const animelistUl = document.querySelector(".js_animelistUl");
const textSearchInput = document.querySelector(".js-textSearchInput");
const btnSearch = document.querySelector(".js-btnSearch");
const btnReset = document.querySelector(".js-btnReset");

// DATOS DE LA APLICACIÓN

let allAnimes = [];

// FUNCIONES

function renderOneAnime(oneAnime) {
  const html = `
    <li class="anime__item" id=${oneAnime.id} >
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
}

// CUANDO CARGA LA PÁGINA

fetch(`https://api.jikan.moe/v4/anime`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.data); El console nos sirve para ver qué elemento dentro de data contiene el array de elementos que nos interesa
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
