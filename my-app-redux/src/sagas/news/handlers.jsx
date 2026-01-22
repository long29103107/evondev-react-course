import { call, put, select } from 'redux-saga/effects';
import requestGetNews from './requests';
import { setNews, setErrorMessage, setLoading } from './newsSlice';

export default function* fetchNews({ payload }) {
    let query = "";
    try {
        const newsQuery = yield select(state => state.news.query);
        if (newsQuery === '') {
            query = 'react';
        } else {
            query = payload;
        }
        yield put(setLoading(true));
        const response = yield call(requestGetNews, query);
        const { hits } = response.data;
        yield put(setNews(hits));
    } catch (error) {
        yield put(setErrorMessage(error.message));
    }
    finally {
        yield put(setLoading(false));
    }
}