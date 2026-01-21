import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits: [],
        loading: true,
        errorMessage: "",
        query: "",
    },
    reducers: {
        setNews: (state,{ payload }) =>( {
            ...state, 
            hits: payload,
        }),
        getNews: () => {},
        setLoading: (state, { payload }) => ({
            ...state,
            loading: payload,
        }),
        setErrorMessage: (state, { payload }) => ({
            ...state,
            errorMessage: payload,
        }),
        setQuery: (state, { payload }) => ({
            ...state,
            query: payload,
        }),
    },
});

export const { setNews, setLoading, getNews, setErrorMessage, setQuery } = newsSlice.actions;
export default newsSlice.reducer;   