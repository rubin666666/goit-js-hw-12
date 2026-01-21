import axios from 'axios';

const API_KEY = '54194884-754619580cd53ed01628e79b9';
export const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
	try {
		const response = await axios.get('https://pixabay.com/api/', {
			params: {
				key: API_KEY,
				q: query,
				image_type: 'photo',
				orientation: 'horizontal',
				safesearch: 'true',
				per_page: PER_PAGE,
				page,
			},
		});
		return response.data;
	} catch (error) {
		console.error('API Error:', error.response?.status, error.message);
		throw error;
	}
}
