import { createSlice, createAction } from '@reduxjs/toolkit';

export const otherAction = createAction('updateLoading')

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        hits: [],
        loading: false,
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
    extraReducers: (builder) => {
        builder.addCase(otherAction, (state, { payload }) => {
            state.loading = payload
        });
    },
});

export const { setNews, getNews, setErrorMessage, setQuery, setLoading } = newsSlice.actions;
export default newsSlice.reducer;