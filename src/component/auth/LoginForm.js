import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { supabase } from "../../config/supabaseClient";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const onSignin = async (event) => {
    const sessionHandler = async () => {
      const { data, error } = await supabase.auth.getSession();
      setUser(data.user);
      console.log(error);
    };

    event.preventDefault(); // Prevent default submission
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      sessionHandler();
      console.log(data.user);
      console.log(error);
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
  };

  console.log("***", user);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
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
            <button onClick={onSignin}>Submit</button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
