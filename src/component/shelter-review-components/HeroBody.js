import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HeroBody() {
  return (
    <Container>
      <Row>
        <Col className={"text-center my-5"} sm={6}>
          <img
            style={{ height: "300px" }}
            src={require("../../assets/iphone-display-one.png")}
            alt="app-demo"
          />
        </Col>
        <Col sm={4}>
          <h2>Make your voice be heard.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Diam nullam pulvinar eget
            consequat in dictum scelerisque accumsan in. Lorem ipsum dolor sit
            amet consectetur. Diam nullam pulvinar eget consequat in dictum.
          </p>
        </Col>
      </Row>
      <Row style={{ flexDirection: "row-reverse" }}>
        <Col className={"text-center my-5"} sm={4}>
          <img
            style={{ height: "300px" }}
            className={"img-fluid"}
            src={require("../../assets/iphone-display-two.png")}
            alt="app-demo"
          />
        </Col>
        <Col sm={6}>
          <h2>Make your voice be heard.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Diam nullam pulvinar eget
            consequat in dictum scelerisque accumsan in. Lorem ipsum dolor sit
            amet consectetur. Diam nullam pulvinar eget consequat in dictum.
          </p>
        </Col>
      </Row>
      <Row>
        <Col style={{ backgroundColor: "#161616", height: "100px" }}></Col>
      </Row>
    </Container>
  );
}

export default HeroBody;
