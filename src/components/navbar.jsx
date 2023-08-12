import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import useCart from "../carrito/usarCarrito";
import { Link } from 'react-router-dom'; 

function BrandExample({ carrito }) {
  const {cantidad} = useCart();
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center separador">
        <Navbar.Brand as={Link} to="/">
          <img src="../img/logo2.png" alt="logo" className=''/>
          FMusic
        </Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success" className='boton'>Search</Button>
        </Form>
        <div className="d-flex align-items-center">
        <Link to="/carrito" className='boton'>
            <img src="../img/carrito-de-compras.png" alt="Carrito" className="cart-image" />
             {cantidad}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
