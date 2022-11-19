import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInForm from "./component/auth/SignUpForm";
import "./App.css";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <SignInForm />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
