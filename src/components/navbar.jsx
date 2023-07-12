import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CartWidget from './CartWidget';

function BrandExample({ productosComprados }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="d-flex justify-content-between align-items-center separador">
        <Navbar.Brand href="#home">Música</Navbar.Brand>
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
          <CartWidget productosComprados={productosComprados} />
        </div>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
