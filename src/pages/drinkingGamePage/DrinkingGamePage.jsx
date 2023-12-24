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
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [currentPlayerCount, setCurrentPlayerCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [questions, setQuestions] = useState([
    {
      task: "Do something",
      drink: 1,
    },
    {
      task: "Do something else",
      drink: 2,
    },
    {
      task: "Do something completely different",
      drink: 3,
    },
  ]);
  const [gameRunning, setGameRunning] = useState(false);

  const handleAddPlayer = (event) => {
    console.log(newPlayer);
    setPlayers([...players, newPlayer]);
    setNewPlayer("");
    event.preventDefault();
  };

  const handleAskQuestion = () => {
    let tempQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(tempQuestion);

    if (currentPlayer === "" || currentPlayer === players[players.length - 1]) {
      setCurrentPlayer(players[0]);
      setCurrentPlayerCount(0);
    } else {
      setCurrentPlayerCount(currentPlayerCount + 1)
      setCurrentPlayer(players[currentPlayerCount + 1]);
    }
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
        <div>
          {currentQuestion.drink >= 1 ? (
            <Card>
              <Card.Header>
                <Card.Title>{currentPlayer}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  {currentQuestion.task} or drink {currentQuestion.drink}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="info" size="lg" onClick={handleAskQuestion}>
                  New Question
                </Button>
              </Card.Footer>
            </Card>
          ) : (
            <div></div>
          )}
          {/* Game Running block */}
          <div className="d-grid gap-2">
            <Button variant="info" size="lg" onClick={handleAskQuestion}>
              Ask Question!
            </Button>
          </div>
          {/* Game Running block */}
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

      {players.length === 0 && (
        <p className="text-danger">You need to add players!</p>
      )}
      {players.length === 1 && (
        <p className="text-danger">Minimum 2 players required!</p>
      )}
      {(players.length >= 2) & !gameRunning && (
        <p className="text-danger">Minimum 2 players required!</p>
      )}
    </Container>
  );
};

export default DrinkingGamePage;
