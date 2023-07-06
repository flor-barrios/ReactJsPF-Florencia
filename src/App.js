import React, { useState } from 'react';
import OffcanvasExample from './components/navbar';
import ListasProductos from './components/ListasProductos';
import DetallesProducto from './components/DetallesProducto';
import datos from './components/datos';
import './estilos.css';

const App = () => {
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productosComprados, setProductosComprados] = useState([]);

  const seleccionarProducto = (producto) => {
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
      <OffcanvasExample productosComprados={productosComprados} />
      <div className="contenedor">
        <h1>Tienda de Música</h1>
        {productoSeleccionado ? (
          <DetallesProducto
            producto={productoSeleccionado}
            comprar={comprar}
            volverAtras={volverAtras}
          />
        ) : (
          <div>
            <ListasProductos greeting={"En prompoció!!"} 
              productos={datos.discos}
              seleccionarProducto={seleccionarProducto}
            />
            <ListasProductos
              productos={datos.vinilos}
              seleccionarProducto={seleccionarProducto}
            />
            <ListasProductos
              productos={datos.instrumentos}
              seleccionarProducto={seleccionarProducto}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
