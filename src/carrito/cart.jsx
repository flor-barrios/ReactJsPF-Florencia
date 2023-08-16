import React from 'react';
import useCart from "../carrito/usarCarrito";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { productos, removeProduct } = useCart();

  const total = productos.reduce((acc, producto) => acc + producto.precio, 0);

  const handleRemoveItem = (id) => {
    removeProduct(id);
  };

  return (
    <div className="cart contenedor">
      <h2>Cart</h2>
      <div className="lista-contenedor">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div key={producto.id} className="listas">
              <div className="cart-item">
                <p>{producto.titulo}</p>
                <img src={producto.imagen} alt={producto.titulo} className='imagen' />
                <p>{producto.precio}</p>
                <button onClick={() => handleRemoveItem(producto.id)} className='boton'>Borrar</button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No items in the cart</p>
          </div>
        )}
      </div>
      {productos.length > 0 && (
        <div className="total-container">
          <p>Total: {total}</p>
        </div>
      )}
      <Link to="/" className="boton">Volver a Tienda</Link>
    </div>
  );
};

export default Cart;
