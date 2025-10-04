import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DSA = () => {
  return (
    <section id="dsa" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Data Structures and Algorithms</h2>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card as={Link} to="/technology/dsa/blogs" className="text-center text-decoration-none h-100">
              <Card.Body>
                <i className="bi bi-journal-code fs-1 text-primary"></i>
                <Card.Title className="mt-3">DSA Blogs</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DSA;