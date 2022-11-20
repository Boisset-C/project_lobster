import "./home.css";
import Container from "react-bootstrap/Container";
import Hero from "../component/shelter-review-components/Hero";
import HeroBody from "../component/shelter-review-components/HeroBody";

function Home() {
  return (
    <Container fluid>
      <Hero />
      <HeroBody />
    </Container>
  );
}

export default Home;
