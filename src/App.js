import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OffcanvasExample from './components/navbar';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import './estilos.css';

const App = () => {
  return (
    <Router>
      <OffcanvasExample />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/productos/:id" element={<ItemPage />} />
      </Routes>
    </Router>
  );
};

export default App;
