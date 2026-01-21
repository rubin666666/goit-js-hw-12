import{a as L,S as w,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const v="46001006-11d6bc7a1c01fb9b31c8ed6dfa8b32e0",m=15;async function S(o,t=1){var s;try{return(await L.get("https://pixabay.com/api/",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:m,page:t}})).data}catch(a){throw console.error("API Error:",(s=a.response)==null?void 0:s.status,a.message),a}}const f=document.querySelector(".gallery"),p=document.querySelector(".loader-container"),c=document.querySelector(".load-more"),M=new w(".gallery a",{captionsData:"alt",captionDelay:250});function q(o){const t=o.map(({largeImageURL:s,webformatURL:a,tags:e,likes:r,views:i,comments:g,downloads:b})=>`
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
							<p class="meta-value">${g}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${b}</p>
						</li>
					</ul>
				</a>
			</li>
		`).join("");f.insertAdjacentHTML("beforeend",t),M.refresh()}function P(){f.innerHTML=""}function B(){p.classList.remove("is-hidden")}function $(){p.classList.add("is-hidden")}function E(){c.classList.remove("is-hidden")}function u(){c.classList.add("is-hidden")}function O(){c.disabled=!0}function R(){c.disabled=!1}const A=document.querySelector(".search-form"),C=document.querySelector(".load-more"),I=document.querySelector(".gallery");let h="",l=1,d=0;A.addEventListener("submit",x);C.addEventListener("click",D);async function x(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){n.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}h=t,l=1,P(),u(),await y(),o.target.reset()}async function D(){l+=1,await y(!0)}async function y(o=!1){try{B(),O();const t=await S(h,l),{hits:s,totalHits:a}=t;if(d=a,!s.length){n.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),u();return}q(s),l*m<d?(E(),R()):(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&H()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{$()}}function H(){const o=I.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
