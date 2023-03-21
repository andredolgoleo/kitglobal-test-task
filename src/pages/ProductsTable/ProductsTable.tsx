/* eslint-disable prettier/prettier */
import React from 'react';
import { Container } from '../modules/styled-components';
import { ProductTypes } from '../../services/types/ProductsTableTypes';
import { ProductCard } from './components/ProductCard';

interface ProductsTableProps {
  data: ProductTypes[]
}

// eslint-disable-next-line react/display-name
export const ProductsTable: React.FC<ProductsTableProps> = ({ data }) => {
  return (
    <Container
      style={{
        display: 'flex',
        gap: 15,
        flexWrap: 'wrap',
      }}
    >
      {data.map((product: ProductTypes) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Container>
  );
};
