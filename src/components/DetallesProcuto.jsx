import React from 'react';

const DetallesProducto = ({ producto, comprar, volverAtras }) => {
  return (
    <div className='contenedor'>
      <h2>{producto.titulo}</h2>
      <img src={producto.imagen} alt={producto.titulo} />
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
      {comprar && (
        <button onClick={() => comprar(producto)}>Comprar</button>
      )}
      {volverAtras && (
        <button onClick={volverAtras}>Volver atrás</button>
      )}
    </div>
  );
};

export default DetallesProducto;
