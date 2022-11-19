import Container from "react-bootstrap";
import Row from "react-bootstrap";
import Col from "react-bootstrap";
import { supabase } from "../../config/supabaseClient";

function LogOff() {
  const SignOutHandler = async () => {
    const { error } = await supabase.auth.signOut();
  };
  return (
    <Container>
      <Row>
        <Col>
          <button onClick={SignOutHandler}>Sign Out</button>
        </Col>
      </Row>
    </Container>
  );
}

export default LogOff;
