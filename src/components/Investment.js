
import React from 'react';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Investment = () => {
  return (
    <section id="investment" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Investment Philosophy</h2>
        <Alert variant="warning">
          <Alert.Heading>Disclaimer</Alert.Heading>
          <p>
            I am not a SEBI registered advisor. The information provided here is for educational purposes only. I may have personal holdings in the companies mentioned. Please do your own research before investing.
          </p>
        </Alert>
        <p className="lead text-center">
          I follow a hybrid investment strategy that combines the principles of Peter Lynch (growth) and Warren Buffet (value). I believe in long-term investing and the power of compounding.
        </p>
        <hr />
        <h3 className="text-center my-4">Company Analysis</h3>
        <Row>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Motilal Oswal Financial Services Ltd</Card.Title>
                <Card.Text>
                  Analysis coming soon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Caplin Point Laboratories Ltd</Card.Title>
                <Card.Text>
                  <Link to="/caplin-point">Read Analysis</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Ashoka Buildcon Ltd</Card.Title>
                <Card.Text>
                  Analysis coming soon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Investment;
