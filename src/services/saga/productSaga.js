import { takeEvery, put, call } from 'redux-saga/effects';
import { getRecipes } from '../API';
import { ASYNC_FETCH_REQUEST, setRecipes } from '../store/productsReducer';

function* getRecipesWorker() {
  const data = yield call(getRecipes);
  yield put(setRecipes(data));
}

export function* getRecipesWatcher() {
  yield takeEvery(ASYNC_FETCH_REQUEST, getRecipesWorker);
}
