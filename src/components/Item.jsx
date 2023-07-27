import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
  return (
    <div className='contenedor'>
      <h3>{producto.titulo}</h3>
      <img src={producto.imagen} alt={producto.titulo} className='imagen' />
      <p>{producto.precio}</p>
      <Link to={`/productos/${producto.id}`} className='boton'>
        Más detalles
      </Link>
    </div>
  );
};

export default Item;
