import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Logo from "../icons/Logo";
import "./navigationBar.css";

function NavigationBar() {
  let navLinkActive = {
    color: "#5955e9",
    fontWeight: "bold",
    borderBottom: "2px solid #5955e9",
  };

  return (
    <Navbar className="navigationBar" expand="sm">
      <Container>
        <Navbar.Brand>
          <NavLink to="/">
            <Logo />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link>
              <NavLink
                className="navLink"
                style={({ isActive }) => (isActive ? navLinkActive : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="auth"
                className="navLink"
                style={({ isActive }) => (isActive ? navLinkActive : undefined)}
              >
                AuthPage
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navLink"
                style={({ isActive }) => (isActive ? navLinkActive : undefined)}
                to="profile"
              >
                Profile
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                className="navLink"
                style={({ isActive }) => (isActive ? navLinkActive : undefined)}
                to="review"
              >
                Reviews
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

// <Nav
//   activeKey="/home"
//   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
// >
//   <Nav.Item>
//     <Nav.Link>
//
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link>
//
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link>
//
//     </Nav.Link>
//   </Nav.Item>
//   <Nav.Item>
//     <Nav.Link>

//     </Nav.Link>
//   </Nav.Item>
// </Nav>
