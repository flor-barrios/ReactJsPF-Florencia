import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ListasProductos = ({ titulo, productos, seleccionarProducto }) => {
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
      <h2>{titulo}</h2>
      <Slider {...sliderSettings}>
        {productos.map((producto) => (
          <div key={producto.id} className='producto-slide'>
            <h3>{producto.titulo}</h3>
            <img src={producto.imagen} alt={producto.titulo} className='imagen' />
            <p>{producto.precio}</p>
            <button onClick={() => seleccionarProducto(producto)} className='boton'>
              Ver detalles
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ListasProductos;
