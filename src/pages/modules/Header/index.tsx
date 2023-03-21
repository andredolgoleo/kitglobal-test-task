import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Container, List } from '../styled-components';

export const Header = () => (
  <header>
    <Nav>
      <Container>
        <Container>Some Logo</Container>
      </Container>

      <List>
        <li>
          <NavLink to={'shopping-cart'}>Shopping-Cart</NavLink>
        </li>
      </List>
    </Nav>
  </header>
);
