import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import Button from "react-bootstrap/Button";
import { useWindowSize } from "../../hooks/useWindowSize";
import heroImage from "../../assets/heroImage.jpg";
import heroImageWeb from "../../assets/heroImageWeb.jpg";

function Hero() {
  const { isMobile } = useWindowSize();

  return (
    <div
      className="heroBgImage"
      style={
        isMobile
          ? { backgroundImage: `url(${heroImage})` }
          : { backgroundImage: `url(${heroImageWeb})` }
      }
    >
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          height: "80vh",
        }}
      >
        <Row className="mx-5">
          <Col sm={4} className="my-1">
            <Button style={{ width: "100%" }}>Find homeless shelters</Button>
          </Col>
        </Row>
        <Row className="mx-5">
          <Col sm={4}>
            <input
              className="searchInput"
              style={{ width: "100%" }}
              placeholder="Enter your zip code"
            />
          </Col>
        </Row>
        <Row className="mx-5 my-3">
          <Col sm={4}>
            <h1 className="heroTitle">
              Share your experience staying at local homeless shelters
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
