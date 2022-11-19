import RegisterForm from "./component/auth/RegisterForm";
import LoginForm from "./component/auth/LoginForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Profile from "./component/auth/Profile";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <LoginForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <RegisterForm />
        </Col>
      </Row>
      <Row>
        <Col>
          <Profile />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
