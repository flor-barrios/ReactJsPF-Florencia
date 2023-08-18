import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCart from "../carrito/usarCarrito";

const ItemPage = () => {
  const { id } = useParams();
  const { addProduct } = useCart();

  let datos;

  function handleComprar() {
    addProduct(datos);
  }  

  for (const categoria in datos) {
    datos = datos[categoria].find((item) => item.id === Number(id));
    if (datos) {
      break;
    }
  }

  if (!datos) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className='contenedor'>
      <div className='detalles-contenedor'>
        <div className='titulo-imagen-container'>
          <h3>{datos.titulo}</h3>
          <img src={datos.imagen} alt={datos.titulo} className='imagen' />
        </div>
        <div className='informacion-container'>
          <p>{datos.descripcion}</p>
          <p className='precio'>{datos.precio}</p>
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
