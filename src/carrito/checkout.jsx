import React, { useState } from 'react';
import useCart from "./usarCarrito";
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { productos, clearCart } = useCart();
  const cartTotalPrice = () => {
    let total = 0;
    productos.forEach(elem => {
      total += elem.datosData.precio * elem.cantidad;
    });
    return total;
  };

  const [buyerInfo, setBuyerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    paymentMethod: '',
    cardNumber: '', 
    cardExpiration: '', 
    cardCVV: '', 
  });

  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBuyerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleBuy = () => {
    if (
      buyerInfo.name &&
      buyerInfo.phone &&
      buyerInfo.email &&
      buyerInfo.paymentMethod &&
      (
        buyerInfo.paymentMethod === 'debit' ||
        (buyerInfo.paymentMethod === 'credit' &&
          buyerInfo.cardNumber &&
          buyerInfo.cardExpiration &&
          buyerInfo.cardCVV)
      )
    ) {
      const order = {
        buyer: buyerInfo,
        items: productos.map((producto) => ({
          id: producto.id,
          title: producto.titulo,
          price: producto.precio,
        })),
        total: cartTotalPrice(),
      };

      const generatedOrderId = Math.floor(Math.random() * 1000000);
      setOrderId(generatedOrderId);

      console.log('Orden realizada:', order);
      clearCart();
    } else {
      console.log('Por favor complete todos los campos obligatorios y seleccione un método de pago válido.');
    }
  };

  const showCardFields = buyerInfo.paymentMethod ;

  return (
    <div className="checkout contenedor">
      <h2>Checkout</h2>
      <div className="checkout-form">
        <h3>Complete los detalles de compra:</h3>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" 
          id="name" 
          name="name" 
          placeholder="Nombre" 
          value={buyerInfo.name} 
          onChange={handleInputChange} 
          required 
          style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono:</label>
          <input type="text" 
          id="phone" 
          name="phone" 
          placeholder="Teléfono" 
          value={buyerInfo.phone} 
          onChange={handleInputChange} 
          required 
          style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" 
          id="email" 
          name="email" 
          placeholder="Email" 
          value={buyerInfo.email} 
          onChange={handleInputChange} 
          required 
          style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}/>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Método de Pago:</label>
          <select id="paymentMethod" 
          name="paymentMethod" 
          value={buyerInfo.paymentMethod} 
          onChange={handleInputChange} 
          required 
          style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}>
            <option value="">Seleccione un método de pago</option>
            <option value="debit">Tarjeta de Débito</option>
            <option value="credit">Tarjeta de Crédito</option>
          </select>
        </div>
        {showCardFields && (
          <div>
            <div className="form-group">
              <label htmlFor="cardNumber">Número de Tarjeta:</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Número de Tarjeta"
                value={buyerInfo.cardNumber}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardExpiration">Fecha de Vencimiento:</label>
              <input
                type="text"
                id="cardExpiration"
                name="cardExpiration"
                placeholder="MM/AA"
                value={buyerInfo.cardExpiration}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardCVV">CVV:</label>
              <input
                type="text"
                id="cardCVV"
                name="cardCVV"
                placeholder="CVV"
                value={buyerInfo.cardCVV}
                onChange={handleInputChange}
                required
                style={{ backgroundColor: "#a3dee4", color: "#fff", border: "none", borderRadius: "4px", fontSize: "14px", cursor: "pointer", padding: "10px", margin: "5px"}}
              />
            </div>
          </div>
        )}
      </div>

      {orderId && (
        <div>
          <p>¡Compra realizada con éxito! Número de Orden: {orderId}</p>
        </div>
      )}

      {productos.length > 0 && (
        <div className="total-container" style={{ textAlign: 'center', marginTop: '20px'}}>
          <p style={{fontWeight: 'bold'}}>Total: USD{cartTotalPrice().toFixed(2)}</p>
          <button onClick={handleBuy} className='boton'>Comprar</button>
        </div>
      )}
      <div>
          <Link to="/" className="boton">Volver a Tienda</Link>
        </div>

    </div>
  );
};

export default Checkout;
