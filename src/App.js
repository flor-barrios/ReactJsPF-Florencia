import React, { useState } from 'react';
import OffcanvasExample from './components/navbar.jsx';
import ListasProductos from './components/ListasProductos';
import DetallesProducto from './components/DetallesProcuto';
import ProductosComprados from './components/ProductosComprados';
import datos from './components/datos';
import './estilos.css';

const App = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productosComprados, setProductosComprados] = useState([]);

  const SeleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  const comprar = (producto) => {
    setProductosComprados((productosPrevios) => [...productosPrevios, producto]);
    setProductoSeleccionado(null);
  };

  const volverAtras = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div>
      <OffcanvasExample />

      <div className='contenedor'>
        <h1>Tienda de Música</h1>
        {productoSeleccionado ? (
          <DetallesProducto
            producto={productoSeleccionado}
            comprar={comprar}
            volverAtras={volverAtras}
          />
        ) : (
          <div>
            <ListasProductos
              productos={datos.discos}
              SeleccionarProducto={SeleccionarProducto}
            />

            <ListasProductos
              productos={datos.vinilos}
              SeleccionarProducto={SeleccionarProducto}
            />

            <ListasProductos
              productos={datos.instrumentos}
              SeleccionarProducto={SeleccionarProducto}
            />
          </div>
        )}
        <ProductosComprados productosComprados={productosComprados} />
      </div>
    </div>
  );
};

export default App;
