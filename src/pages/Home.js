import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import Button from "react-bootstrap/Button";
import { useWindowSize } from "../hooks/useWindowSize";
import heroImage from "../assets/heroImage.jpg";
import heroImageWeb from "../assets/heroImageWeb.jpg";
import Hero from "../component/shelter-review-components/Hero";

function Home() {
  return (
    <Container fluid>
      <Hero />
    </Container>
  );
}

export default Home;
