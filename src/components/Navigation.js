import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <NavbarBrand as={Link} to="/">APL RESTORATION</NavbarBrand>
          <Navbar.Text className="text-start">24/7 Emergency Toll-Free Number <br/>
1-833-7GOT-FLOOD?（1-833-746-8356）or  604.446.2773</Navbar.Text>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/about">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/about">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink as={Link} to="/about">Who we serve</NavLink>
              <NavLink as={Link} to="/about">Where we serve</NavLink>
              <NavLink as={Link} to="/about">About Us</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
