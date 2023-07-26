import React from 'react';

const CartWidget = ({ productosComprados }) => {
  const totalProductos = productosComprados ? productosComprados.length : 0;

  return (
    <div>
      <div>
        <img
          src="../img/carrito-de-compras.png"
          className="d-inline-block align-top"
          alt="Carrito de compras"
        />
        <span>{totalProductos}</span>
      </div>
    </div>
  );
};

export default CartWidget;