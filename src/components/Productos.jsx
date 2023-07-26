import React from 'react';
import { Link } from 'react-router-dom';
import productos from './datos';

function Productos() {
  return (
    <div>
      <h2>Discos</h2>
      {productos.discos.map((producto) => (
        <div key={producto.id}>
          <Link to={`/productos/${producto.id}`}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
          </Link>
        </div>
      ))}

      <h2>Vinilos</h2>
      {productos.vinilos.map((producto) => (
        <div key={producto.id}>
          <Link to={`/productos/${producto.id}`}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
          </Link>
        </div>
      ))}

      <h2>Instrumentos</h2>
      {productos.instrumentos.map((producto) => (
        <div key={producto.id}>
          <Link to={`/productos/${producto.id}`}>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
            <p>{producto.descripcion}</p>
            <p>{producto.precio}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Productos;
