import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  requestGetNews from "../sagas/news/requests";

export const handlerFetchNews = createAsyncThunk('news/fetchNews', async (query, thunkAPI) => {
    console.log('query', query);
    console.log('thunkAPI', thunkAPI);
    const response = await requestGetNews(query);
    return response.data.hits;
});


const initialState = {
    hits: [],
    loading: false,
    errorMessage: "",
    query: "",
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setQuery: (state, { payload }) => ({
            ...state, 
            query: payload,
        }),
    },  
    extraReducers: (builder) => {
        builder.addCase(handlerFetchNews.fulfilled, (state, { payload }) => {
            state.hits = payload;
            state.loading = false;
        });
        builder.addCase(handlerFetchNews.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(handlerFetchNews.rejected, (state, { error }) => {
            state.loading = false;
            state.errorMessage = error.message;
        });
    },          
});

export const { setQuery } = newsSlice.actions;
export default newsSlice.reducer;