import React from 'react';
import useCart from "../carrito/usarCarrito";

const Cart = () => {
  const { productos } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {productos.map((producto) => (
        <div key={producto.id} className="cart-item">
          <p>{producto.titulo}</p>
          <p>{producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
