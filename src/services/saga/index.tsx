import { all } from 'redux-saga/effects';
import { getRecipesWatcher } from './productSaga';

export function* rootWatcher() {
  yield all([getRecipesWatcher()]);
}
