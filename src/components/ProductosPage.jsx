import React from 'react';
import { Link, useParams } from 'react-router-dom';
import productos from './datos';

function ProductosPage({ carrito, setCarrito }) {
  const { id } = useParams();

  let producto;

  for (const categoria in productos) {
    producto = productos[categoria].find((item) => item.id === Number(id));
    if (producto) {
      break;
    }
  }

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  const handleComprar = () => {
    setCarrito(carrito + 1);
  };

  return (
    <div className='contenedor'>
      <div className='detalles-contenedor'>
        <h3>{producto.titulo}</h3>
        <img src={producto.imagen} alt={producto.titulo} className='imagen'/>
        <p className='informacion-container'>{producto.descripcion}</p>
        <p>{producto.precio}</p>
        <Link to="/" className='boton'>Atrás</Link>
        <button onClick={handleComprar} className='boton'>Comprar</button>
      </div>
    </div>
  );
}

export default ProductosPage;
