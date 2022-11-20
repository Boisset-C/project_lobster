import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { supabase } from "../../config/supabaseClient";

function Profile() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (data) {
        setUser(data?.session?.user);
      }

      if (error) {
        alert("there was error");
      }
    };

    fetchUser();
    console.log(user);
    //  eslint-disable-next-line
  }, []);
  console.log(user);

  return (
    <Container className="profileContainer">
      <Row>
        <Col>
          <h1>Profile:</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <p>Email: {user.email}</p>
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
