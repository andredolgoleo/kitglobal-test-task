import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Root } from './pages/modules/root';
import { ProductsTable } from './pages/ProductsTable';
import { useSelector } from 'react-redux';
import { ShoppingCartTable } from './pages/ShoppingCartTable/ShoppingCartTable';

function App() {
  const products = useSelector((state: any) => state.productsReducer.products);

  return (
    <Routes>
      <Route path="kitglobal-test-task" element={<Root />}>
        {products.length > 0 && <Route index element={<ProductsTable data={products} />} />}
        <Route path="shopping-cart" element={<ShoppingCartTable />} />
      </Route>
    </Routes>
  );
}
export default App;
