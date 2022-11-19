import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Profile() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Profile:</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Username: Sample</p>
        </Col>
        <Col>
          <p>Email: Sample</p>
        </Col>
        <Col>
          <p>Question 1:</p>
          <p>Question 2:</p>
          <p>Question 3:</p>
          <p>Question 4:</p>
          <p>Question 5:</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
