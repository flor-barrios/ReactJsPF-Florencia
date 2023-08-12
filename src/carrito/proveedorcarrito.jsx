import { useState } from "react";
import CartContext from "./cartContext";

function CartProvider({ initialProductos = [], children }) {
  const [productos, setProductos] = useState(initialProductos);

  function addProduct(producto) {
    const nuevaLista = [...productos];
    nuevaLista.push(producto);

    setProductos(nuevaLista);
  }

  const valueProvided = {
    productos,
    addProduct,
    cantidad: productos.length
  };

  return (
    <CartContext.Provider value={valueProvided}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
