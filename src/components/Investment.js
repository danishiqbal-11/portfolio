
import React from 'react';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Investment = () => {
  return (
    <section id="investment" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-4"><i className="bi bi-graph-up-arrow text-primary"></i> Investment Philosophy</h2>
          <p className="lead">
            I follow a hybrid investment strategy that combines the principles of Peter Lynch (growth) and Warren Buffet (value). I believe in long-term investing and the power of compounding.
          </p>
        </div>

        <Alert variant="warning" className="shadow-sm">
          <Alert.Heading><i className="bi bi-exclamation-triangle-fill"></i> Disclaimer</Alert.Heading>
          <p>
            I am not a SEBI registered advisor. The information provided here is for educational purposes only. I may have personal holdings in the companies mentioned. Please do your own research before investing.
          </p>
        </Alert>

        <hr className="my-5" />

        <h3 className="text-center my-4">Company Analysis</h3>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-muted"></i>
                  <Card.Title className="mt-3">Motilal Oswal Financial Services Ltd</Card.Title>
                </div>
                <Card.Text className="text-center mt-auto">
                  Analysis coming soon.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/caplin-point" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-success"></i>
                  <Card.Title className="mt-3">Caplin Point Laboratories Ltd</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-muted"></i>
                  <Card.Title className="mt-3">Ashoka Buildcon Ltd</Card.Title>
                </div>
                <Card.Text className="text-center mt-auto">
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
