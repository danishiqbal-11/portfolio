import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <section id="technology" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Technology Stack</h2>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card className="text-center h-100">
              <Card.Body>
                <i className="bi bi-robot fs-1 text-danger"></i>
                <Card.Title className="mt-3">Artificial Intelligence</Card.Title>
                <div className="mt-3">
                  <Link to="/technology/ai/ml" className="d-block">Machine Learning</Link>
                  <Link to="/technology/ai/dl" className="d-block mt-2">Deep Learning</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technology;
