import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { asyncFetchRequest } from '../../../services/store/productsReducer';
import { Header } from '../Header';

export const Root: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchRequest());
  }, []);

  return (
    <>
      <Header />
      <main style={{ padding: '50px' }}>
        <Outlet />
      </main>
      <footer>FOOTER</footer>
    </>
  );
};
