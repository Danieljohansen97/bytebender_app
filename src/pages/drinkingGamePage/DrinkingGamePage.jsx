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
  const [gameRunning, setGameRunning] = useState(false);

  const handleAddPlayer = (event) => {
    console.log(newPlayer);
    setPlayers([...players, newPlayer]);
    setNewPlayer("");
    event.preventDefault();
  };

  const handleAskQuestion = () => {
    console.log("Question asked!");
  };

  return (
    <Container fluid>
      <h1>DoD</h1>
      {!gameRunning ? (
        <div>
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
                      value={newPlayer}
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
          {players.length >= 2 ? (
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setGameRunning(true)}
              >
                Start Game
              </Button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="d-grid gap-2">
          <Button variant="info" size="lg" onClick={handleAskQuestion}>
            Ask Question!
          </Button>
        </div>
      )}

      {players.length >= 1 ? (
        <ListGroup>
          {players.map((player, index) => (
            <ListGroup.Item key={index}>{player}</ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <div></div>
      )}

      {players.length === 0 && <p className="text-danger">You need to add players!</p>}
      {players.length === 1 && <p className="text-danger">Minimum 2 players required!</p>}
      {players.length >= 2 & !gameRunning && <p className="text-danger">Minimum 2 players required!</p>}
    </Container>
  );
};

export default DrinkingGamePage;
