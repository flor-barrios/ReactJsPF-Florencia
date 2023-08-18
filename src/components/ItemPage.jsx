import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useCart from "../carrito/usarCarrito";
import { getFirestore, doc, getDoc, collection } from 'firebase/firestore';

const ItemPage = () => {
  const { id } = useParams();
  const { addProduct } = useCart();
  const [datosData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const datosDocRef = doc(collection(db, 'datos'), id);
        const datosSnapshot = await getDoc(datosDocRef);

        if (datosSnapshot.exists()) {
          const newItem = {
            id: datosSnapshot.id,
            ...datosSnapshot.data(),
          };
          setProductData(newItem);
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar los datos.', error);
      }
    };

    fetchData();
  }, [id]);

  function handleComprar() {
    if (datosData) {
      addProduct(datosData);
    }
  }

  if (!datosData) {
    return <h2>Producto no encontrado</h2>;
  }

  const { titulo, imagen, descripcion, precio } = datosData;

  return (
    <div className='contenedor'>
      <div className='detalles-contenedor'>
        <div className='titulo-imagen-container'>
          <h3>{titulo}</h3>
          <img src={imagen} alt={titulo} className='imagen' />
        </div>
        <div className='informacion-container'>
          <p>{descripcion}</p>
          <p className='precio'>USD{precio}</p>
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
