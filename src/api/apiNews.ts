import axios from 'axios';
import { ICategoriesApiResponse, INewsApiResponse, ParamsType } from '../interfaces';

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

enum STATUS {
	ERROR = 'error',
	OK = 'ok',
}

export const getNews = async (params?: ParamsType): Promise<T> => {
	try {
		const { page_number = 1, page_size = 10, category, keywords } = params || {};
		const response = await axios.get<INewsApiResponse>(`${BASE_URL}search`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size,
				category,
				keywords,
			},
		});
		return response.data;
	} catch (err) {
		console.log(err);
		return { news: [], page: 1, status: STATUS.ERROR };
	}
};

export const getCategories = async (): Promise<ICategoriesApiResponse> => {
	try {
		const response = await axios.get<ICategoriesApiResponse>(`${BASE_URL}available/categories`, {
			params: {
				apiKey: API_KEY,
			},
		});
		return response.data;
	} catch (err) {
		console.log(err);
		return { categories: [], description: '', status: STATUS.ERROR };
	}
};

export const getLatestNews = async (): Promise<INewsApiResponse> => {
	try {
		const response = await axios.get<INewsApiResponse>(`${BASE_URL}latest-news`, {
			params: {
				apiKey: API_KEY,
			},
		});
		return response.data as INewsApiResponse;
	} catch (error) {
		console.log(error);
		return { news: [], page: 1, status: 'error' };
	}
};
