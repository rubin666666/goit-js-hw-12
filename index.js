import{S as w}from"./assets/vendor-CgTBfC_f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L="54194884-754619580cd53ed01628e79b9",m=15;async function v(t,o=1){var s;try{return(await window.axios.get("https://pixabay.com/api/",{params:{key:L,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:m,page:o}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const f=document.querySelector(".gallery"),p=document.querySelector(".loader-container"),c=document.querySelector(".load-more"),S=new w(".gallery a",{captionsData:"alt",captionDelay:250});function M(t){const o=t.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:n,comments:h,downloads:b})=>`
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
							<p class="meta-value">${b}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");f.insertAdjacentHTML("beforeend",o),S.refresh()}function q(){f.innerHTML=""}function P(){p.classList.remove("is-hidden")}function B(){p.classList.add("is-hidden")}function $(){c.classList.remove("is-hidden")}function u(){c.classList.add("is-hidden")}function E(){c.disabled=!0}function z(){c.disabled=!1}let i;(async()=>window.iziToast?i=window.iziToast:(i={error:t=>console.error(t.message),info:t=>console.log(t.message)},console.warn("iziToast not available, using fallback")))();const O=document.querySelector(".search-form"),R=document.querySelector(".load-more"),T=document.querySelector(".gallery");let g="",l=1,d=0;O.addEventListener("submit",A);R.addEventListener("click",C);async function A(t){t.preventDefault();const o=t.target.elements.query.value.trim();if(!o){i.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}g=o,l=1,q(),u(),await y(),t.target.reset()}async function C(){l+=1,await y(!0)}async function y(t=!1){try{P(),E();const o=await v(g,l),{hits:s,totalHits:a}=o;if(d=a,!s.length){i.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),u();return}M(s),l*m<d?($(),z()):(u(),i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),t&&I()}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{B()}}function I(){const t=T.firstElementChild;if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
