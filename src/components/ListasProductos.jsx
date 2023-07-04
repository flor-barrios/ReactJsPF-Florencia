import React from 'react';

const ListasProductos = ({ productos, SeleccionarProducto }) => {
  return (
    <div className='contenedor'>
      <h2>Listas de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.precio}</p>
            <button onClick={() => SeleccionarProducto(producto)}>Ver detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListasProductos;
