import React from 'react';
import { useParams } from 'react-router-dom';
import productos from './datos';

function ProductosPage() {
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

  return (
    <div>
      <div>
        <h3>{producto.titulo}</h3>
        <img src={producto.imagen} alt={producto.titulo} />
        <p>{producto.descripcion}</p>
        <p>{producto.precio}</p>
      </div>
    </div>
  );
}

export default ProductosPage;
