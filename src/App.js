import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BrandExample from './components/navbar';
import ItemList from './components/ItemList';
import ItemPage from './components/ItemPage';
import CartProvider from './carrito/proveedorcarrito';
import Cart from './carrito/cart';
import Checkout from './carrito/checkout'; 
import './estilos.css';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <BrandExample />
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/productos/:id" element={<ItemPage />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
