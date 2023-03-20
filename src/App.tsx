import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Root } from './modules/root';

function App() {
  return (
    <Routes>
      <Route path="kitglobal-test-task" element={<Root />}>
        <Route index element={<div>Main</div>} />
      </Route>
    </Routes>
  );
}
export default App;
