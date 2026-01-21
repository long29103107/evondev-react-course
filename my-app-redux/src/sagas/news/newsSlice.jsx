import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits: [],
        loading: true,
        errorMessage: "",
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
    },
});

export const { setNews, setLoading, getNews, setErrorMessage } = newsSlice.actions;
export default newsSlice.reducer;   