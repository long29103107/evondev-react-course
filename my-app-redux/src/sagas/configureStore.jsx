import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from './reducers';
// import rootSaga from './rootSaga';

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    //    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
});

// sagaMiddleware.run(rootSaga);
export default store;