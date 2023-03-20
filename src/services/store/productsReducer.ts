import { ActionTypes } from '../types'; // eslint-disable-line

const defaultState = {
  products: []
};

export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ASYNC_FETCH_REQUEST = 'ASYNC_FETCH_REQUEST';

export const productsReducer = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
  }

  return state;
};

export const setRecipes = (payload: unknown) => ({ type: SET_PRODUCTS, payload });
export const asyncFetchRequest = () => ({ type: ASYNC_FETCH_REQUEST });
