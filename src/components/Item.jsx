import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ datos }) => {
  return (
    <div className='contenedor'>
      <h3>{datos.titulo}</h3>
      <img src={datos.imagen} alt={datos.titulo} className='imagen' />
      <p>{datos.precio}</p>
      <Link to={`/datos/${datos.id}`} className='boton'>
        Más detalles
      </Link>
    </div>
  );
};

export default Item;
