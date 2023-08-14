import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productos from './datos';
import useCart from "../carrito/usarCarrito";

const ItemPage = () => {
  const { id } = useParams();
  const { addProduct } = useCart();

  let producto;

  function handleComprar() {
    addProduct(producto);
  }  

  for (const categoria in productos) {
    producto = productos[categoria].find((item) => item.id === Number(id));
    if (producto) {
      break;
    }
  }

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className='contenedor'>
      <div className='detalles-contenedor'>
        <div className='titulo-imagen-container'>
          <h3>{producto.titulo}</h3>
          <img src={producto.imagen} alt={producto.titulo} className='imagen' />
        </div>
        <div className='informacion-container'>
          <p>{producto.descripcion}</p>
          <p className='precio'>{producto.precio}</p>
          <div className='botones2'>
            <Link to="/" className='boton boton2'>
              Atrás
            </Link>
            <button className='boton boton2' onClick={handleComprar}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
