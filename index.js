import{a as L,S as v,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}})();const w="46001006-11d6bc7a1c01fb9b31c8ed6dfa8b32e0",f=15,S=L.create({baseURL:"https://pixabay.com/api/"});async function M(o,t=1){return(await S.get("/",{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:f,page:t}})).data}const p=document.querySelector(".gallery"),y=document.querySelector(".loader-container"),c=document.querySelector(".load-more"),q=new v(".gallery a",{captionsData:"alt",captionDelay:250});function P(o){const t=o.map(({largeImageURL:r,webformatURL:s,tags:e,likes:a,views:i,comments:g,downloads:b})=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${r}">
					<div class="gallery-thumb">
						<img src="${s}" alt="${e}" loading="lazy" />
					</div>
					<ul class="gallery-meta">
						<li class="meta-item">
							<p class="meta-label">Likes</p>
							<p class="meta-value">${a}</p>
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
		`).join("");p.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){p.innerHTML=""}function $(){y.classList.remove("is-hidden")}function E(){y.classList.add("is-hidden")}function R(){c.classList.remove("is-hidden")}function u(){c.classList.add("is-hidden")}function O(){c.disabled=!0}function C(){c.disabled=!1}const x=document.querySelector(".search-form"),A=document.querySelector(".load-more"),D=document.querySelector(".gallery");let d="",l=1,m=0;x.addEventListener("submit",H);A.addEventListener("click",I);async function H(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){n.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}t!==d&&(l=1,B()),d=t,u(),await h(),o.target.reset()}async function I(){l+=1,await h(!0)}async function h(o=!1){try{$(),O();const t=await M(d,l),{hits:r,totalHits:s}=t;if(m=s,!r.length){n.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),u();return}P(r),l*f<m?(R(),C()):(u(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&_()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3})}finally{E()}}function _(){const o=D.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
