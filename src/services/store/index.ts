import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { productsReducer } from './productsReducer';
import { rootWatcher } from '../saga';
import { shoppingCartReducer } from './shoppingCartReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  productsReducer,
  shoppingCartReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootWatcher);
