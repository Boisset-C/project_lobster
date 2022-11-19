import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { supabase } from "../../config/supabaseClient";

function Profile() {
  return (
    <Container className="profileContainer">
      <Row>
        <Col>
          <h1>Profile:</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <p>Username: Sample</p>
          <p>Email: Sample</p>
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
