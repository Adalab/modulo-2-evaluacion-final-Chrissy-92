"use strict";

console.log(">> Ready :)");

const animelistUl = document.querySelector(".js_animelistUl");

// DATOS DE LA APLICACIÓN

let allAnimes = [];

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

// CUANDO CARGA LA PÁGINA

//

fetch(`https://api.jikan.moe/v4/anime`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data); //El console nos sirve para ver qué elemento dentro de data contiene el array de elementos que nos interesa
    allAnimes = data.data;

    renderAllAnimes();
  });
