import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore"; 
import { firebaseConfig } from '../configuracion/firebaseConfig';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore(firebaseConfig);
      try {
        const querySnapshot = await getDocs(collection(db, "datos"));
        const data = querySnapshot.docs.map(doc => doc.data());
        setProducts(data);
      } catch (error) {
        console.error('Error recolectando los datos de Firestore', error);
      }
    };

    fetchData();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='contenedor'>
      <h1>La mejor Música en tus manos</h1>
      {Object.keys(products).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <Slider {...sliderSettings}>
            {products[category].map(product => (
              <div key={product.titulo} className='item'>
                <h3>{product.titulo}</h3>
                <img src={product.imagen} alt={product.titulo} className='imagen' />
                <p>{product.precio}</p>
                <Link to={`/productos/${product.titulo}`} className='boton'>
                  Más detalles
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
