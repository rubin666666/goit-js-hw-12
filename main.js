import { getImagesByQuery, PER_PAGE } from './src/js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  disableLoadMoreButton,
  enableLoadMoreButton,
} from './src/js/render-functions.js';

// Ensure iziToast is available
if (!window.iziToast) {
  console.error('iziToast not loaded');
}

const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');

let currentQuery = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  const query = event.target.elements.query.value.trim();

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
      timeout: 2500,
    });
    return;
  }

  currentQuery = query;
  page = 1;
  clearGallery();
  hideLoadMoreButton();
  await fetchImages();
  event.target.reset();
}

async function onLoadMore() {
  page += 1;
  await fetchImages(true);
}

async function fetchImages(isLoadMore = false) {
  try {
    showLoader();
    disableLoadMoreButton();

    const data = await getImagesByQuery(currentQuery, page);
    const { hits, totalHits: total } = data;
    totalHits = total;

    if (!hits.length) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search. Please try again!',
        position: 'topRight',
        timeout: 3000,
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(hits);

    const hasMore = page * PER_PAGE < totalHits;

    if (hasMore) {
      showLoadMoreButton();
      enableLoadMoreButton();
    } else {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
        timeout: 3000,
      });
    }

    if (isLoadMore) {
      smoothScroll();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      timeout: 3000,
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const firstCard = gallery.firstElementChild;
  if (!firstCard) return;

  const { height } = firstCard.getBoundingClientRect();
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
