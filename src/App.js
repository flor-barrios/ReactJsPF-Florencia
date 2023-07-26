import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffcanvasExample from './components/navbar';
import Productos from './components/Productos';
import ProductosPage from './components/ProductosPage';
import './estilos.css';

const App = () => {
  return (
    <BrowserRouter>
      <OffcanvasExample/>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductosPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
