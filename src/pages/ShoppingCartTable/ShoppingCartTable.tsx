import React from 'react';
import { useSelector } from 'react-redux';
import { ProductTypes } from '../../services/types/ProductsTableTypes';
import { Container, Title } from '../modules/styled-components';
import { ShoppingCartCard } from './components/ShoppingCartCard/ShoppingCartCard';
export const ShoppingCartTable: React.FC = () => {
  const store = useSelector((store: any) => store.shoppingCartReducer);

  if (store.length < 1) {
    return <Title>Choose some products</Title>;
  }

  console.log(store);
  const sumOfItems = store.reduce((a: number = 0, b: ProductTypes) => a + b.id, 0);

  return (
    <Container>
      <Title>Sum of items id: {sumOfItems}</Title>
      <Container
        style={{
          display: 'flex',
          gap: 15,
          flexWrap: 'wrap',
          marginTop: 20
        }}>
        {store.map((product: ProductTypes) => (
          <ShoppingCartCard key={product.id} product={product} />
        ))}
      </Container>
    </Container>
  );
};
