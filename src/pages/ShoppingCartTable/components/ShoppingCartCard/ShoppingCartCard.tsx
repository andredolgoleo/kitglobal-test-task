import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../../../services/store/shoppingCartReducer';
import { ProductTypes } from '../../../../services/types/ProductsTableTypes';
import { Button, Container } from '../../../modules/styled-components';

interface Props {
  product: ProductTypes;
}

export const ShoppingCartCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

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
      <Button onClick={handleOnRemove}>Remove from shopping cart</Button>
    </Container>
  );
};
