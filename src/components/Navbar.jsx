import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Habit-Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <NavDropdown title="View" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/habit-list">
              All Habits
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/daily-view">
              Daily View
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/weekly-view">
              Weekly View
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/add-habit">
            Add Habit
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
