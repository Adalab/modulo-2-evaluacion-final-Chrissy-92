const f=document.querySelector(".js-formAnime"),u=document.querySelector(".js-animelistUl"),h=document.querySelector(".js-animelistfavoritesUl"),v=document.querySelector(".js-textSearchInput"),p=document.querySelector(".js-btnSearch"),_=document.querySelector(".js-btnReset");let a=[],n=[];function m(e){return n.findIndex(t=>t.mal_id===e.mal_id)===-1?`
      <li class="anime__item js-animeLi" data-id=${e.mal_id}>
        <div class="anime__chromo">
          <h2 class="title__anime-item">${e.title}</h2>
          <p class="js-type">${e.type}</p>
          <img src=${e.images.jpg.image_url} />
        </div>
      </li>
    `:`
      <li class="anime__item js-animeLi favoriteAnime" data-id=${e.mal_id}>
        <div class="anime__chromo">
          <span class="deleteIcon js-deleteIcon" id=${e.mal_id}>
            <i class="fa-solid fa-square-xmark"></i>
          </span>
          <h2 class="title__anime-item">${e.title}</h2>
          <p class="js-type">${e.type}</p>
          <img src=${e.images.jpg.image_url} />
        </div>
      </li>
    `}function o(){let e="";for(const t of a)e+=m(t);u.innerHTML=e;const i=document.querySelectorAll(".js-animelistUl .js-animeLi");for(const t of i)t.addEventListener("click",S)}function l(){let e="";for(const t of n)e+=m(t);h.innerHTML=e;const i=document.querySelectorAll(".js-deleteIcon");for(const t of i)t.addEventListener("click",j)}function S(e){const i=e.currentTarget;i.classList.toggle("favoriteAnime");const t=parseInt(i.dataset.id),s=n.findIndex(c=>c.mal_id===t);if(s===-1){const c=a.find(d=>d.mal_id===t);n.push(c)}else n.splice(s,1);localStorage.setItem("favoritesAnimes",JSON.stringify(n)),l()}const j=e=>{const i=parseInt(e.currentTarget.id),t=n.findIndex(s=>s.mal_id===i);n.splice(t,1),l(),o()};fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{a=e.data,o()});const r=JSON.parse(localStorage.getItem("favoritesAnimes"));r!==null&&(n=r,l());function g(e){e.preventDefault();const i=v.value;fetch(`https://api.jikan.moe/v4/anime?q=${i}`).then(t=>t.json()).then(t=>{a=t.data,o()})}function y(e){e.preventDefault(),f.reset(),n=[],localStorage.clear(),document.querySelectorAll(".favoriteAnime").forEach(i=>i.classList.remove("favoriteAnime")),l()}p.addEventListener("click",g);_.addEventListener("click",y);
//# sourceMappingURL=main.js.map
