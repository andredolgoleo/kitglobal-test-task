import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductTypes } from '../../../../services/types/ProductsTableTypes';
import { Container, Button } from '../../../modules/styled-components';
import {
  removeProductFromCart,
  addProductToCart
} from '../../../../services/store/shoppingCartReducer';

interface ProductCardProps {
  // eslint-disable-next-line prettier/prettier
  product: ProductTypes
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const isValid = Object.values(product).some((item: number | string) => item !== null);

  console.log(isValid);
  const store = useSelector((state: any) => state.shoppingCartReducer);
  const isChosen =
    store.length > 0 ? store.some((item: ProductTypes) => item.id === product.id) : false;

  const handleOnClick = () => {
    dispatch(addProductToCart(product));
  };

  const handleOnRemove = () => {
    dispatch(removeProductFromCart(product.id));
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 250
      }}>
      <span
        style={{
          height: 10,
          textAlign: 'center',
          marginBottom: 10
        }}>
        {product.title}
      </span>
      <img height={250} width={250} src={product.url} alt="" />
      {isChosen ? (
        <Button onClick={handleOnRemove}>Remove from shopping cart</Button>
      ) : (
        <Button disabled={!isValid} onClick={handleOnClick}>
          Buy
        </Button>
      )}
    </Container>
  );
};
