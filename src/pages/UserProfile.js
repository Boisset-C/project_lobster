import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../component/auth/Profile";

function UserProfile() {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <p>THIS IS USER PROFILE PAGE</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <Profile />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
