import axios from 'axios';
import key from '../config/key';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: key,
		language: 'ko',
		region: 'KR',
	},
});

export const movies = {
	popular: () => api.get('movie/popular'),
	upcoming: () => api.get('movie/upcoming'),
	nowPlaying: () => api.get('movie/now_playing'),
	search: (text: string) =>
		api.get('search/movie', {
			params: {
				query: text,
			},
		}),
	detail: (id: string) =>
		api.get(`movie/${id}`, {
			params: {
				append_to_response: 'credits,videos',
			},
		}),
	recommendation: (id: string) => api.get(`movie/${id}/recommendations`),
};
