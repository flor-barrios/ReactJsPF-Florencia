import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function BrandExample() {
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
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Brand href="#home">
          <img
            src="../img/carrito-de-compras.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default BrandExample;
