import{a as L,S as b}from"./assets/vendor-BprjmLGJ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="54194884-754619580cd53ed01628e79b9",d=15;async function v(o,t=1){var s;try{return(await L.get("https://pixabay.com/api/",{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:d,page:t}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const m=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),l=document.querySelector(".load-more"),S=new b(".gallery a",{captionsData:"alt",captionDelay:250});function M(o){const t=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:y,downloads:g})=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${s}">
					<div class="gallery-thumb">
						<img src="${a}" alt="${e}" loading="lazy" />
					</div>
					<ul class="gallery-meta">
						<li class="meta-item">
							<p class="meta-label">Likes</p>
							<p class="meta-value">${r}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Views</p>
							<p class="meta-value">${i}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Comments</p>
							<p class="meta-value">${y}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${g}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");m.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){m.innerHTML=""}function P(){f.classList.remove("is-hidden")}function B(){f.classList.add("is-hidden")}function $(){l.classList.remove("is-hidden")}function c(){l.classList.add("is-hidden")}function E(){l.disabled=!0}function z(){l.disabled=!1}const O=document.querySelector(".search-form"),R=document.querySelector(".load-more"),T=document.querySelector(".gallery");let p="",n=1,u=0;O.addEventListener("submit",A);R.addEventListener("click",C);async function A(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){iziToast.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}p=t,n=1,q(),c(),await h(),o.target.reset()}async function C(){n+=1,await h(!0)}async function h(o=!1){try{P(),E();const t=await v(p,n),{hits:s,totalHits:a}=t;if(u=a,!s.length){iziToast.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),c();return}M(s),n*d<u?($(),z()):(c(),iziToast.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&I()}catch{iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{B()}}function I(){const o=T.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
