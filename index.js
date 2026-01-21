(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const b="54194884-754619580cd53ed01628e79b9",m=15;async function L(t,o=1){var s;try{return(await window.axios.get("https://pixabay.com/api/",{params:{key:b,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:m,page:o}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const f=document.querySelector(".gallery"),p=document.querySelector(".loader-container"),c=document.querySelector(".load-more"),v=new window.SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});function M(t){const o=t.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:n,comments:h,downloads:w})=>`
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
							<p class="meta-value">${n}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Comments</p>
							<p class="meta-value">${h}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${w}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");f.insertAdjacentHTML("beforeend",o),v.refresh()}function S(){f.innerHTML=""}function q(){p.classList.remove("is-hidden")}function P(){p.classList.add("is-hidden")}function B(){c.classList.remove("is-hidden")}function u(){c.classList.add("is-hidden")}function $(){c.disabled=!0}function E(){c.disabled=!1}let i;(async()=>window.iziToast?i=window.iziToast:(i={error:t=>console.error(t.message),info:t=>console.log(t.message)},console.warn("iziToast not available, using fallback")))();const z=document.querySelector(".search-form"),O=document.querySelector(".load-more"),R=document.querySelector(".gallery");let g="",l=1,d=0;z.addEventListener("submit",T);O.addEventListener("click",A);async function T(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){i.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}g=o,l=1,S(),u(),await y(),t.target.reset()}async function A(){l+=1,await y(!0)}async function y(t=!1){try{q(),$();const o=await L(g,l),{hits:s,totalHits:a}=o;if(d=a,!s.length){i.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),u();return}M(s),l*m<d?(B(),E()):(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),t&&C()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{P()}}function C(){const t=R.firstElementChild;if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
