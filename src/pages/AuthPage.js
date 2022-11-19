import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoginForm from "../component/auth/LoginForm";
import RegisterForm from "../component/auth/RegisterForm";

function AuthPage() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <p>THIS IS AUTH PAGE</p>
          </div>
        </Col>
      </Row>
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
    </Container>
  );
}

export default AuthPage;
