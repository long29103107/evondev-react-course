import { combineReducers } from '@reduxjs/toolkit';
import newsSlice from '../redux-thunk/newsSlice';

const reducer = combineReducers({
    news: newsSlice,
});

export default reducer;