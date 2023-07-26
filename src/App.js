import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffcanvasExample from './components/navbar';
import Home from './components/home';
import Productos from './components/Productos';
import ProductosPage from './components/ProductosPage';
import './estilos.css';

const App = () => {
  return (
    <BrowserRouter>
      <OffcanvasExample productosComprados={[]} />
      <Routes>
        <Route path="/" element={<Home title="Esta es la ruta home" />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<ProductosPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
