import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const store: any[] = useSelector((state: any) => state.productsReducer.products);
  const navigate = useNavigate();

  if (store.length > 0) {
    navigate('/products');
  }

  return <h1>123</h1>;
}
export default App;
