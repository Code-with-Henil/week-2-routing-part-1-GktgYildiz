import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary me-auto">
      <Container>
        <Link to="/" className="navbar-brand">
          Skyino Bakery
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/bread">
              Bread
            </Nav.Link>
            <Nav.Link as={Link} to="/cake">
              Cake
            </Nav.Link>
            <Nav.Link as={Link} to="/pastry">
              Pastry
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar2;
