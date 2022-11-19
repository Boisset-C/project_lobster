import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <p>Nav Bar</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <NavLink to="auth">AuthPage </NavLink>
        </Col>
      </Row>
      <Row>
        <Col>
          <NavLink to="/">Review Filter Nav Page </NavLink>
        </Col>
      </Row>
      <Row>
        <Col>
          <NavLink to="review">review </NavLink>
        </Col>
      </Row>
      <Row>
        <Col>
          <NavLink to="profile">Profile Page </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Nav;
