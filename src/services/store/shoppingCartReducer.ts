import { ActionTypes } from '../types'; // eslint-disable-line
import { ProductTypes } from '../types/ProductsTableTypes';

const defaultState: any[] = JSON.parse(localStorage.getItem('savedProducts') || '[]') || [];

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const DELETE_PRODUCT_FROM_CART = 'DELETE_PRODUCT_FROM_CART';

export const shoppingCartReducer = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      localStorage.setItem('savedProducts', JSON.stringify([...state, action.payload]));
      return [...state, action.payload];

    case DELETE_PRODUCT_FROM_CART:
      // eslint-disable-next-line no-case-declarations
      const newState = state.filter((item: ProductTypes) => item.id !== action.payload);
      localStorage.setItem('savedProducts', JSON.stringify(newState));
      return newState;
  }

  return state;
};

export const addProductToCart = (payload: any) => ({ type: ADD_PRODUCT_TO_CART, payload });
export const removeProductFromCart = (payload: number) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload
});
