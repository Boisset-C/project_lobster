import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "@tanstack/react-query";
import { fetchDCDatabase } from "../config/api";

function ShelterReviewPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchDCDatabase,
  });

  console.log(isLoading);
  if (!isLoading) {
    alert(data);
    console.log(data);
  }

  return (
    <Container>
      <Row>
        <Col>
          <input placeholder="search" />
        </Col>
      </Row>
    </Container>
  );
}

export default ShelterReviewPage;
