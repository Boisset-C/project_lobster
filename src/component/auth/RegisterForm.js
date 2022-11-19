import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { supabase } from "../../config/supabaseClient";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = async (event) => {
    event.preventDefault(); // Prevent default submission
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        email_confirm: false,
      });
      console.log(data);
      console.log(error);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Register Form</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form>
            <div>
              <label>Email address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </div>
            <button onClick={onRegister}>Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
