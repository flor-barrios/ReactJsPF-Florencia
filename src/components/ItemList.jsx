import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import productos from './datos';

const ItemList = () => {
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
      <h2>Discos</h2>
      <Slider {...sliderSettings}>
        {productos.discos.map((producto) => (
          <div key={producto.id} className='item'>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} className='imagen' />
            <p>{producto.precio}</p>
            <Link to={`/productos/${producto.id}`} className='boton'>
              Más detalles
            </Link>
          </div>
        ))}
      </Slider>

      <h2>Vinilos</h2>
      <Slider {...sliderSettings}>
        {productos.vinilos.map((producto) => (
          <div key={producto.id} className='item'>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} className='imagen' />
            <p>{producto.precio}</p>
            <Link to={`/productos/${producto.id}`} className='boton'>
              Más detalles
            </Link>
          </div>
        ))}
      </Slider>

      <h2>Instrumentos</h2>
      <Slider {...sliderSettings}>
        {productos.instrumentos.map((producto) => (
          <div key={producto.id} className='item'>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} className='imagen' />
            <p>{producto.precio}</p>
            <Link to={`/productos/${producto.id}`} className='boton'>
              Más detalles
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ItemList;
