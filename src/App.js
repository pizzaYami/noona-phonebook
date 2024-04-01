import styled from "styled-components";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./components/ContactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div>
      <Title>Phone Book</Title>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

const Title = styled.h1`
  text-align: center;
  margin: 40px 0;
`;
