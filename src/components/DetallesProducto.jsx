import React from 'react';

const DetallesProducto = ({ producto, comprar, volverAtras }) => {
  return (
    <div className='contenedor'>
      <div className="detalles-contenedor">
        <div className="imagen-container">
          <img src={producto.imagen} alt={producto.titulo} className='imagen' />
        </div>
        <div className="informacion-container">
          <h2>{producto.titulo}</h2>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <div className='botones2'>
            {comprar && (
              <button onClick={() => comprar(producto)} className='boton'>Comprar</button>
            )}
            {volverAtras && (
              <button onClick={volverAtras}>
                <img src="./img/atras.png" alt="Volver atrás" className='atras' />
              </button>
            )}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default DetallesProducto;
