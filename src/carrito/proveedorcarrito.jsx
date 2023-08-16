import React, { useState } from "react";
import CartContext from "./cartContext";

function CartProvider({ initialProductos = [], children }) {
  const [productos, setProductos] = useState(initialProductos);

  function addProduct(producto) {
    const nuevaLista = [...productos];
    nuevaLista.push(producto);
    setProductos(nuevaLista);
  }

  function removeProduct(id) {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
  }

  const valueProvided = {
    productos,
    addProduct,
    removeProduct, 
    cantidad: productos.length,
  };

  return (
    <CartContext.Provider value={valueProvided}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
