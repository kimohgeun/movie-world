import axios from 'axios';
import key from '../config/key';

const api = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: key,
		language: 'ko',
	},
});

export const movies = {
	popular: () => api.get('movie/popular'),
};
