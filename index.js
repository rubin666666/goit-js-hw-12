(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const w="54194884-754619580cd53ed01628e79b9",d=15;async function L(o,t=1){var s;try{return(await window.axios.get("https://pixabay.com/api/",{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:d,page:t}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const m=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),l=document.querySelector(".load-more"),b=new window.SimpleLightbox(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const t=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:h,downloads:g})=>`
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
							<p class="meta-value">${h}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${g}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");m.insertAdjacentHTML("beforeend",t),b.refresh()}function M(){m.innerHTML=""}function S(){f.classList.remove("is-hidden")}function q(){f.classList.add("is-hidden")}function P(){l.classList.remove("is-hidden")}function c(){l.classList.add("is-hidden")}function B(){l.disabled=!0}function $(){l.disabled=!1}const E=document.querySelector(".form"),z=document.querySelector(".load-more"),O=document.querySelector(".gallery");let p="",n=1,u=0;E.addEventListener("submit",R);z.addEventListener("click",T);async function R(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){window.iziToast.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}p=t,n=1,M(),c(),await y(),o.target.reset()}async function T(){n+=1,await y(!0)}async function y(o=!1){try{S(),B();const t=await L(p,n),{hits:s,totalHits:a}=t;if(u=a,!s.length){window.iziToast.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),c();return}v(s),n*d<u?(P(),$()):(c(),window.iziToast.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&A()}catch{window.iziToast.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{q()}}function A(){const o=O.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
