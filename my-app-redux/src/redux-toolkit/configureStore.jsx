import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import globalSlice from './globalSlice';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

// const loggerMiddleware = (store) => (next) => (action) => {
//   console.log('dispatching', action);
//   const result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
});

// store.subscribe(() => {
//   //javascript observer pattern
//   console.log('state changed', store.getState().counter.count);
// });

// store.dispatch(incrementByValue(10));
// store.dispatch(incrementByValue(10));
// store.dispatch(incrementByValue(10));

// sagaMiddleware.run(rootSaga);

export default store;
