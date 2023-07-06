import React from 'react';
import ProductosComprados from './ProductosComprados';

const CartWidget = ({ productosComprados }) => {
  const totalProductos = productosComprados ? productosComprados.length : 0;

  return (
    <div>
      <img
        src="../img/carrito-de-compras.png"
        className="d-inline-block align-top"
        alt="Carrito de compras"
      />
      <span>{totalProductos}</span>
    </div>
  );
};

export default CartWidget;
