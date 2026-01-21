import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
});

export default store;