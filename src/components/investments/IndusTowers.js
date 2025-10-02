import React from 'react';
import { Container, Card } from 'react-bootstrap';

const IndusTowers = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <i className="bi bi-building fs-1 text-primary"></i>
            <h2 className="mt-3">Indus Towers Limited</h2>
            <p className="lead">
              Analysis coming soon.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default IndusTowers;