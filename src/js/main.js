"use strict";

console.log(">> Ready :)");

const animelistUl = document.querySelector(".js_animelistUl");

// DATOS DE LA APLICACIÓN

const allAnimes = [
  {
    mal_id: 20,
    image_url: "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
    title: "Naruto",
  },
  {
    mal_id: 16870,
    image_url: "https://cdn.myanimelist.net/images/anime/1491/134498.jpg",
    title: "The Last: Naruto the Movie",
  },
  {
    mal_id: 28755,
    image_url: "https://cdn.myanimelist.net/images/anime/4/78280.jpg",
    title: "Boruto: Naruto the Movie",
  },
];

// FUNCIONES

function renderOneAnime(oneAnime) {
  const html = `
    <li class="anime__item" id=${oneAnime.id} >
    <h2 class="title__anime-item">${oneAnime.title}</h2>
    <div class="anime__chromo">${oneAnime.image_url}</div>
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

renderAllAnimes();
