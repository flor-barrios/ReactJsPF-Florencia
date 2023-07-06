import React from 'react';

const ProductosComprados = ({ productosComprados }) => {
  const totalProductos = productosComprados.length;

  return (
    <div className='contenedor'>
      <h2>Productos Comprados ({totalProductos})</h2>
      <ul>
        {productosComprados.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductosComprados;
