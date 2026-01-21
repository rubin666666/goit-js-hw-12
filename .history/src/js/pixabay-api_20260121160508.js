import axios from 'axios';

const API_KEY = '46001006-11d6bc7a1c01fb9b31c8ed6dfa8b32e0';
export const PER_PAGE = 15;

const api = axios.create({
	baseURL: 'https://pixabay.com/api/',
});

export async function getImagesByQuery(query, page = 1) {
	const response = await api.get('/', {
		params: {
			key: API_KEY,
			q: query,
			image_type: 'photo',
			orientation: 'horizontal',
			safesearch: true,
			per_page: PER_PAGE,
			page,
		},
	});

	return response.data;
}
