import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OffcanvasExample from './components/navbar';
import Productos from './components/Productos';
import ProductosPage from './components/ProductosPage';
import './estilos.css';

const App = () => {
  const [carrito, setCarrito] = useState(0);

  return (
    <BrowserRouter>
      <OffcanvasExample productosComprados={carrito} />
      <Routes>
        <Route
          path="/productos/:id"
          element={<ProductosPage carrito={carrito} setCarrito={setCarrito} />}
        />
        <Route path="/" element={<Productos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
