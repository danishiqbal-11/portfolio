
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Companies = () => {
  return (
    <section id="companies" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-4"><i className="bi bi-building text-primary"></i> Company Analysis</h2>
        </div>
        <Row>
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
        </Row>
      </Container>
    </section>
  );
};

export default Companies;
