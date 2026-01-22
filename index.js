import{a as v,S,i as n}from"./assets/vendor-DvfmeZXB.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="54194884-754619580cd53ed01628e79b9",p=15;async function M(o,t=1){try{return(await v.get("https://pixabay.com/api/",{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:t}})).data}catch(a){throw a}}const y=document.querySelector(".gallery"),h=document.querySelector(".loader-container"),u=document.querySelector(".load-more"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250});function B(o){const t=o.map(({largeImageURL:a,webformatURL:s,tags:e,likes:r,views:i,comments:b,downloads:w})=>`
			<li class="gallery-item">
				<a class="gallery-link" href="${a}">
					<div class="gallery-thumb">
						<img src="${s}" alt="${e}" loading="lazy" />
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
		`).join("");y.insertAdjacentHTML("beforeend",t),P.refresh()}function $(){y.innerHTML=""}function E(){h.classList.remove("is-hidden")}function O(){h.classList.add("is-hidden")}function d(){u.classList.remove("is-hidden")}function l(){u.classList.add("is-hidden")}function R(){u.disabled=!0}function m(){u.disabled=!1}const C=document.querySelector(".form"),x=document.querySelector(".load-more"),A=document.querySelector(".gallery");let g="",c=1,f=0;C.addEventListener("submit",D);x.addEventListener("click",H);async function D(o){o.preventDefault();const t=o.target.elements.query.value.trim();if(!t){n.error({message:"Please enter a search query.",position:"topRight",timeout:2500});return}g=t,c=1,$(),l(),await L(),o.target.reset()}async function H(){c+=1,await L(!0)}async function L(o=!1){try{E(),l(),R();const t=await M(g,c),{hits:a,totalHits:s}=t;if(f=s,!a.length){n.error({message:"Sorry, there are no images matching your search. Please try again!",position:"topRight",timeout:3e3}),l();return}B(a),c*p<f?(d(),m()):(l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3})),o&&I()}catch{n.error({message:"Something went wrong. Please try again later.",position:"topRight",timeout:3e3}),o&&(d(),m())}finally{O()}}function I(){const o=A.firstElementChild;if(!o)return;const{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
