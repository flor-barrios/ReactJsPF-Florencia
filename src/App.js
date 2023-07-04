import React, { useState } from 'react';
import logo from './';
import './estilos.css';

import 'core-js/stable';


const ListaDiscos = ({ discos, SeleccionarDisco }) => {
  return (
    <div className='listas contenedor'>
      <h2>Discos Disponibles</h2>
      <ul>
        {discos.map((disco) => (
          <li key={disco.id}>
            <h3>{disco.titulo}</h3>
            <img src={disco.imagen} alt={disco.titulo} />
            <p>{disco.precio}</p>
            <button onClick={() => SeleccionarDisco(disco)}>Ver detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListaVinilos = ({ vinilos, SeleccionarVinilo }) => {
  return (
    <div className='listas contenedor'>
      <h2>Vinilos Disponibles</h2>
      <ul>
        {vinilos.map((vinilo) => (
          <li key={vinilo.id}>
            <h3>{vinilo.titulo}</h3>
            <img src={vinilo.imagen} alt={vinilo.titulo} />
            <p>{vinilo.precio}</p>
            <button onClick={() => SeleccionarVinilo(vinilo)}>Ver detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ListaInstrumentos = ({ instrumentos, SeleccionarInstrumento }) => {
  return (
    <div className='listas contenedor'>
      <h2>Instrumentos Disponibles</h2>
      <ul>
        {instrumentos.map((instrumento) => (
          <li key={instrumento.id}>
            <h3>{instrumento.titulo}</h3>
            <img src={instrumento.imagen} alt={instrumento.título} />
            <p>{instrumento.precio}</p>
            <button onClick={() => SeleccionarInstrumento(instrumento)}>Ver detalles</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const DetallesProducto = ({ producto, comprar, volverAtras }) => {
  return (
    <div className='contenedor'>
      <h2>{producto.titulo}</h2>
      <img src={producto.imagen} alt={producto.titulo} />
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
      {comprar && (
      <button onClick={() => comprar(producto)}>Comprar</button>
      )}
      {volverAtras && (
      <button onClick={volverAtras}>Volver atrás</button>
      )}
    </div>
  );
};

const ProductosComprados = ({ productosComprados }) => {
return (
  <div className='contenedor'>
    <h2>Productos Comprados</h2>
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

const App = () => {
const [productoSeleccionado, setProductoSeleccionado] = useState(null);
const [productosComprados, setProductosComprados] = useState([]);

const discos = [
{
  id: 1,
  titulo: 'Disco 1',
  descripcion: 'Descripción del disco 1',
  precio: 'Precio del disco 1',
  imagen: './img/disco2harry.jpg',
},
{
  id: 2,
  titulo: 'Disco 2',
  descripcion: 'Descripción del disco 1',
  precio: 'Precio del disco 1',
  imagen: './img/discoharry.jpg',
},
{
  id: 3,
  titulo: 'Disco 3',
  descripcion: 'Descripción del disco 1',
  precio: 'Precio del disco 1',
  imagen: './img/discoMichael.jpg',
},
{
  id: 4,
  titulo: 'Disco 4',
  descripcion: 'Descripción del disco 1',
  precio: 'Precio del disco 1',
  imagen: './img/discorauw.jpg',
},
{
  id: 5,
  titulo: 'Disco 5',
  descripcion: 'Descripción del disco 1',
  precio: 'Precio del disco 1',
  imagen: './img/discotaylor.jpg',
},
];

const vinilos = [
{
  id: 6,
  titulo: 'Vinilo 1',
  descripcion: 'Descripción del vinilo 1',
  precio: 'Precio del vinilo 1',
  imagen: './img/vinilostickyStones.jpg',
},
{
  id: 7,
  titulo: 'Vinilo 2',
  descripcion: 'Descripción del vinilo 1',
  precio: 'Precio del vinilo 1',
  imagen: './img/vinilopinkf.jpg',
},
{
  id: 8,
  titulo: 'Vinilo 3',
  descripcion: 'Descripción del vinilo 1',
  precio: 'Precio del vinilo 1',
  imagen: './img/viniloharry.jpg',
},
{
  id: 9,
  titulo: 'Vinilo 4',
  descripcion: 'Descripción del vinilo 1',
  precio: 'Precio del vinilo 1',
  imagen: './img/vinilobeatles.jpg',
},
{
  id: 10,
  titulo: 'Vinilo 5',
  descripcion: 'Descripción del vinilo 1',
  precio: 'Precio del vinilo 1',
  imagen: './img/vinilos.jpg',
},
];

const instrumentos = [
{
id: 11,
titulo: 'Instrumento 1',
descripcion: 'Descripción del instrumento 1',
precio: 'Precio del instrumento 1',
imagen: './img/victrolains.jpg',
},
];

const SeleccionarDisco = (disco) => {
setProductoSeleccionado(disco);
};

const SeleccionarVinilo = (vinilo) => {
setProductoSeleccionado(vinilo);
};

const SeleccionarInstrumento = (instrumento) => {
setProductoSeleccionado(instrumento);
};

const comprar = (producto) => {
setProductosComprados((productosPrevios) => [...productosPrevios, producto]);
setProductoSeleccionado(null);
};

const volverAtras = () => {
setProductoSeleccionado(null);
};

return (
<div className='contenedor'>
<h1>Tienda de Música</h1>
{productoSeleccionado ? (
<DetallesProducto
       producto={productoSeleccionado}
       comprar={comprar}
       volverAtras={volverAtras}
     />
): (
  <div>
  <ListaDiscos
           discos={discos}
           SeleccionarDisco={SeleccionarDisco}
         />
  <ListaVinilos
           vinilos={vinilos}
           SeleccionarVinilo={SeleccionarVinilo}
         />
  <ListaInstrumentos
           instrumentos={instrumentos}
           SeleccionarInstrumento={SeleccionarInstrumento}
         />
  </div>
  )}
  <ProductosComprados productosComprados={productosComprados} />
  </div>
  );
  };
  
  export default App;
