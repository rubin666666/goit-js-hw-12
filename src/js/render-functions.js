import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});

export function createGallery(images) {
	const markup = images
		.map(
			({
				largeImageURL,
				webformatURL,
				tags,
				likes,
				views,
				comments,
				downloads,
			}) => `
			<li class="gallery-item">
				<a class="gallery-link" href="${largeImageURL}">
					<div class="gallery-thumb">
						<img src="${webformatURL}" alt="${tags}" loading="lazy" />
					</div>
					<ul class="gallery-meta">
						<li class="meta-item">
							<p class="meta-label">Likes</p>
							<p class="meta-value">${likes}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Views</p>
							<p class="meta-value">${views}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Comments</p>
							<p class="meta-value">${comments}</p>
						</li>
						<li class="meta-item">
							<p class="meta-label">Downloads</p>
							<p class="meta-value">${downloads}</p>
						</li>
					</ul>
				</a>
			</li>
		`
		)
		.join('');

	gallery.insertAdjacentHTML('beforeend', markup);
	lightbox.refresh();
}

export function clearGallery() {
	gallery.innerHTML = '';
}

export function showLoader() {
	loader.classList.remove('is-hidden');
}

export function hideLoader() {
	loader.classList.add('is-hidden');
}

export function showLoadMoreButton() {
	loadMoreBtn.classList.remove('is-hidden');
}

export function hideLoadMoreButton() {
	loadMoreBtn.classList.add('is-hidden');
}

export function disableLoadMoreButton() {
	loadMoreBtn.disabled = true;
}

export function enableLoadMoreButton() {
	loadMoreBtn.disabled = false;
}
