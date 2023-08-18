import React from 'react';
import useCart from "../carrito/usarCarrito";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { productos, removeProduct, clearCart } = useCart();
  const cartTotalPrice = () => {
    let total = 0;
    productos.forEach(elem => {
      total += elem.precio * elem.cantidad;
    });
    return total;
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
                <button className='boton' onClick={() => removeProduct(producto.id)}>Borrar</button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No items in the cart</p>
            <Link to="/" className="boton">Volver a Tienda</Link>
          </div>
        )}
      </div>
      {productos.length > 0 && (
        <div className="total-container" style={{ textAlign: 'center', marginTop: '20px', fontWeight: 'bold'}}>
          <p>Total: {cartTotalPrice()}</p>
        </div>
      )}
      {productos.length > 0 && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
          <Link to="/checkout" className="boton">Finalizar Compra</Link>
          <button onClick={clearCart} className='boton'>Limpiar Carrito</button>
          <Link to="/" className="boton">Volver a Tienda</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
