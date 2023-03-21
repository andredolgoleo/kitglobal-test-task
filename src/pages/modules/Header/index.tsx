import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Nav, Container, List } from '../styled-components';

export const Header = () => {
  const store = useSelector((store: any) => store.shoppingCartReducer);

  return (
    <header>
      <Nav>
        <Container>
          <Container>Some Logo</Container>
        </Container>

        <List>
          <li>
            <NavLink to={'shopping-cart'}>Shopping-Cart</NavLink>
            <div>{store.length}</div>
          </li>
        </List>
      </Nav>
    </header>
  );
};
