import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { supabase } from "../../config/supabaseClient";
import { useNavigate } from "react-router";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSignin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      console.log(data);
      console.log(error);
      navigate("/profile");
    } catch (e) {
      alert(`Sign in failed! ${e.message}`);
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={(e) => e.preventDefault()}>
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
            <button onClick={(e) => onSignin()}>Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
