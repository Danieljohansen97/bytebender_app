import React from "react";
import { Card, Modal, Container, Button, Row, Col } from "react-bootstrap";

import "./homePage.styles.css";

const HomePage = () => {
  return (
    <div>
      <Container fluid>
        <Card>
          <Card.Header>
            <Card.Title>Title</Card.Title>
          </Card.Header>
          <Card.Body>
            <h1>Something</h1>
            <p>Will figure out later</p>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="secondary" size="lg">
                --
              </Button>
              <Button variant="primary" size="lg">
                --
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default HomePage;
