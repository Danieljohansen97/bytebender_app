import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  ListGroup,
} from "react-bootstrap";

const DrinkingGamePage = () => {
  const [newPlayer, setNewPlayer] = useState("");
  const [players, setPlayers] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleAddPlayer = (event) => {
    console.log(newPlayer);
    setPlayers([...players, newPlayer]);
    event.preventDefault();
  };

  return (
    <Container fluid>
      <h1>DoD</h1>
      <Form onSubmit={handleAddPlayer}>
        <Row className="align-items-center">
          <Col xs="8">
            <Form.Group>
              <FloatingLabel
                htmlFor="playerInput"
                label="Drinker's Name"
                className="mb-3"
              >
                <Form.Control
                  placeholder="Name"
                  type="text"
                  id="playerInput"
                  onChange={(e) => setNewPlayer(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
          <Col xs="4">
            <Button variant="outline-success" size="lg" type="submit">
              Add Player
            </Button>
          </Col>
        </Row>
      </Form>
      <hr></hr>
      <ListGroup>
        {players.map((player, index) => (
          <ListGroup.Item key={index}>{player}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default DrinkingGamePage;
