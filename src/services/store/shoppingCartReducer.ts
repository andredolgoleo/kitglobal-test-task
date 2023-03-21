import { ActionTypes } from '../types'; // eslint-disable-line

const defaultState: any[] = [];

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';

export const shoppingCartReducer = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...state, action.payload];
  }

  return state;
};

export const addProductToCart = (payload: any) => ({ type: ADD_PRODUCT_TO_CART, payload });
