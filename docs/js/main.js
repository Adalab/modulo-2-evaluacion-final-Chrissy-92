const u=document.querySelector(".js-formAnime"),f=document.querySelector(".js-animelistUl"),h=document.querySelector(".js-animelistfavoritesUl"),v=document.querySelector(".js-textSearchInput"),_=document.querySelector(".js-btnSearch"),S=document.querySelector(".js-btnReset");let l=[],i=[];function m(e){return i.findIndex(t=>t.mal_id===e.mal_id)===-1?`
      <li class="anime__item js-animeLi" data-id=${e.mal_id}>
        <div class="anime__chromo">
          <h2 class="title__anime-item">${e.title}</h2>
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
          <img src=${e.images.jpg.image_url} />
        </div>
      </li>
    `}function c(){let e="";for(const t of l)e+=m(t);f.innerHTML=e;const n=document.querySelectorAll(".js-animelistUl .js-animeLi");for(const t of n)t.addEventListener("click",g)}function a(){let e="";for(const t of i)e+=m(t);h.innerHTML=e;const n=document.querySelectorAll(".js-deleteIcon");for(const t of n)t.addEventListener("click",j)}function g(e){const n=e.currentTarget;n.classList.toggle("favoriteAnime");const t=parseInt(n.dataset.id),s=i.findIndex(o=>o.mal_id===t);if(s===-1){const o=l.find(d=>d.mal_id===t);i.push(o)}else i.splice(s,1);localStorage.setItem("favoritesAnimes",JSON.stringify(i)),a()}const j=e=>{console.log("Has hecho click en un icono de cancelar");const n=parseInt(e.currentTarget.id);console.log(n);const t=i.findIndex(s=>s.mal_id===n);console.log(t),i.splice(t,1),a(),c()};fetch("https://api.jikan.moe/v4/anime").then(e=>e.json()).then(e=>{l=e.data,c()});const r=JSON.parse(localStorage.getItem("favoritesAnimes"));r!==null&&(i=r,a());function p(e){e.preventDefault();const n=v.value;fetch(`https://api.jikan.moe/v4/anime?q=${n}`).then(t=>t.json()).then(t=>{l=t.data,c()})}function A(e){e.preventDefault(),u.reset(),i=[],localStorage.clear(),document.querySelectorAll(".favoriteAnime").forEach(n=>n.classList.remove("favoriteAnime")),a()}_.addEventListener("click",p);S.addEventListener("click",A);
//# sourceMappingURL=main.js.map
