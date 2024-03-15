import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IFilters } from '../../../shared/interfaces'
import { PAGE_SIZE } from '../../../shared/constants'
import { INews } from './types'

// Define a type for the slice state
interface State {
  news: INews[],
  currentNews: INews | null
  filters: IFilters
}

// Define the initial state using that type
const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  }
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news=action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<INews | null>) => {
      state.currentNews = action.payload
    },
    setFilters: (state, action: PayloadAction<{key: string, value: string | number | null}>) => {
      const {key, value} = action.payload;
      state.filters = {...state.filters,[key]: value}
    },
  },
})

export const { setNews, setFilters,setCurrentNews } = newsSlice.actions

export default newsSlice.reducer