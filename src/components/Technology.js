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
            <Card as={Link} to="/technology/dsa" className="text-center text-decoration-none h-100">
              <Card.Body>
                <i className="bi bi-diagram-3 fs-1 text-primary"></i>
                <Card.Title className="mt-3">Data Structure and Algorithms</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card as={Link} to="/technology/lld" className="text-center text-decoration-none h-100">
              <Card.Body>
                <i className="bi bi-braces fs-1 text-success"></i>
                <Card.Title className="mt-3">Low Level Design</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card as={Link} to="/technology/hld" className="text-center text-decoration-none h-100">
              <Card.Body>
                <i className="bi bi-bounding-box fs-1 text-info"></i>
                <Card.Title className="mt-3">High Level Design</Card.Title>
              </Card.Body>
            </Card>
          </Col>
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