import { combineReducers } from '@reduxjs/toolkit';
import newsSlice from './news/newsSlice';

const reducer = combineReducers({
    news: newsSlice,
});

export default reducer;