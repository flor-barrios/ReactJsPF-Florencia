import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetallesProducto from './components/DetallesProducto';
import ListasProductos from './components/ListasProductos';
import datos from './components/datos';
import OffcanvasExample from './components/navbar';
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
    <BrowserRouter>
      <div className='app'>
        <OffcanvasExample productosComprados={productosComprados} />
        <div className="contenedor">
          <h1>Tienda de Música</h1>
          <Routes>
            <Route
              path="/"
              element={
                <TodasListasProductos seleccionarProducto={seleccionarProducto} />
              }
            />
            <Route
              path="/vinilos"
              element={
                <ListasProductos
                  titulo="Vinilos"
                  productos={datos.vinilos}
                  seleccionarProducto={seleccionarProducto}
                />
              }
            />
            <Route
              path="/instrumentos"
              element={
                <ListasProductos
                  titulo="Instrumentos"
                  productos={datos.instrumentos}
                  seleccionarProducto={seleccionarProducto}
                />
              }
            />
            <Route
              path="/detalles/:id"
              element={
                <DetallesProducto
                  producto={productoSeleccionado}
                  comprar={comprar}
                  volverAtras={volverAtras}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

const TodasListasProductos = ({ seleccionarProducto }) => {
  return (
    <div>
      <ListasProductos
        titulo="Discos"
        productos={datos.discos}
        seleccionarProducto={seleccionarProducto}
      />
      <ListasProductos
        titulo="Vinilos"
        productos={datos.vinilos}
        seleccionarProducto={seleccionarProducto}
      />
      <ListasProductos
        titulo="Instrumentos"
        productos={datos.instrumentos}
        seleccionarProducto={seleccionarProducto}
      />
    </div>
  );
};

export default App;