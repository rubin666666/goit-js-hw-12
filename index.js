import{a as v,i as n}from"./assets/vendor-weOZHO9C.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const S="54194884-754619580cd53ed01628e79b9",p=15;async function q(o,t=1){var s;try{return(await v.get("https://pixabay.com/api/",{params:{key:S,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const y=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),u=document.querySelector(".load-more"),M=new window.SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});function P(o){const t=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:b,downloads:w})=>`
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
							<p class="meta-value">${b}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${w}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");y.insertAdjacentHTML("beforeend",t),M.refresh()}function B(){y.innerHTML=""}function $(){h.classList.remove("is-hidden")}function E(){h.classList.add("is-hidden")}function d(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}function O(){u.disabled=!0}function m(){u.disabled=!1}const R=document.querySelector(".form"),A=document.querySelector(".load-more"),C=document.querySelector(".gallery");let g="",c=1,f=0;R.addEventListener("submit",I);A.addEventListener("click",x);async function I(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){n.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}g=t,c=1,B(),l(),await L(),o.target.reset()}async function x(){c+=1,await L(!0)}async function L(o=!1){try{$(),l(),O();const t=await q(g,c),{hits:s,totalHits:a}=t;if(f=a,!s.length){n.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),l();return}P(s),c*p<f?(d(),m()):(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&D()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3}),o&&(d(),m())}finally{E()}}function D(){const o=C.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
