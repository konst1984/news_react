import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategoriesApiResponse, INewsApiResponse, ParamsType } from '../../interfaces'

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
  reducerPath: 'newApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<INewsApiResponse, ParamsType>({
      query: (params) => {
        const { page_number = 1, page_size = 10, category, keywords } = params || {};
        return {
          url: 'search',
          params: {
            apiKey: API_KEY,
            page_number,
            page_size,
            category,
            keywords,
          }
        }
      },
    }),
    getCategories: builder.query<ICategoriesApiResponse, null>({
      query: () => ({
          url: 'available/categories',
          params: {
            apiKey: API_KEY,
          }
      }),
    }),
    getLatestNews: builder.query<INewsApiResponse, null>({
      query: () => ({
          url: 'latest-news',
          params: {
            apiKey: API_KEY,
          }
      }),
    }),
  }),
})


export const { useGetNewsQuery, useGetCategoriesQuery, useGetLatestNewsQuery } = newsApi