import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

const ItemList = () => {
  const [discos, setDiscos] = useState([]);
  const [vinilos, setVinilos] = useState([]);
  const [instrumentos, setInstrumentos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      try {
        const discosQuery = query(collection(db, 'datos'), where("categoria", "==", "discos"));
        const vinilosQuery = query(collection(db, 'datos'), where("categoria", "==", "vinilos"));
        const instrumentosQuery = query(collection(db, 'datos'), where("categoria", "==", "instrumentos"));

        const discosSnapshot = await getDocs(discosQuery);
        const vinilosSnapshot = await getDocs(vinilosQuery);
        const instrumentosSnapshot = await getDocs(instrumentosQuery);

        const discosData = discosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        const vinilosData = vinilosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        const instrumentosData = instrumentosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

        setDiscos(discosData);
        setVinilos(vinilosData);
        setInstrumentos(instrumentosData);
      } catch (error) {
        console.error('Error fetching data from Firestore', error);
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

      <div className='category'>
        <h2>Discos</h2>
        <Slider {...sliderSettings}>
          {discos.map(product => (
            <div key={product.id} className='item'>
              <h3>{product.titulo}</h3>
              <img src={product.imagen} alt={product.titulo} className='imagen' />
              <p>USD{product.precio}</p>
              <Link to={`/productos/${product.id}`} className='boton'>
                Más detalles
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className='category'>
        <h2>Vinilos</h2>
        <Slider {...sliderSettings}>
          {vinilos.map(product => (
            <div key={product.id} className='item'>
              <h3>{product.titulo}</h3>
              <img src={product.imagen} alt={product.titulo} className='imagen' />
              <p>USD{product.precio}</p>
              <Link to={`/productos/${product.id}`} className='boton'>
                Más detalles
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className='category'>
        <h2>Instrumentos</h2>
        <Slider {...sliderSettings} style={{ marginBottom: '100px' }}>
          {instrumentos.map(product => (
            <div key={product.id} className='item'>
              <h3>{product.titulo}</h3>
              <img src={product.imagen} alt={product.titulo} className='imagen' />
              <p>USD{product.precio}</p>
              <Link to={`/productos/${product.id}`} className='boton'>
                Más detalles
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ItemList;
