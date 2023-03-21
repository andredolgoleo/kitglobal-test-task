import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductTypes } from '../../../../services/types/ProductsTableTypes';
import { Container, Button } from '../../../modules/styled-components';

interface ProductCardProps {
  // eslint-disable-next-line prettier/prettier
  product: ProductTypes
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.shoppingCartReducer);

  console.log(store);

  const handleOnClick = () => {
    dispatch({
      action: 'ADD_PRODUCT_TO_CART',
      payload: product,
      type: 'ADD_PRODUCT_TO_CART'
    });
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
      <Button onClick={handleOnClick}>Buy</Button>
    </Container>
  );
};
