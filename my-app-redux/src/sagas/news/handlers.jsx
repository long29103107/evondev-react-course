import { call, put } from 'redux-saga/effects';
import requestGetNews from './requests';
import { setNews, setErrorMessage, setLoading } from './newsSlice';

export default function* handleGetNews(action) {
    try {
        const response = yield call(requestGetNews, action.payload);
        const { hits } = response.data;
        yield put(setNews(hits));
    } catch (error) {
        yield put(setErrorMessage(error.message));
    }
    finally {
        yield put(setLoading(false));
    }
}