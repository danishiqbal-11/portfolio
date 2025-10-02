import React from 'react';
import { Container, Card } from 'react-bootstrap';

const ML = () => {
  return (
    <section id="ml" className="py-5 bg-light">
      <Container>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <i className="bi bi-robot fs-1 text-primary"></i>
            <h2 className="mt-3">Machine Learning</h2>
            <p className="lead">
              This section is under construction. Content about Machine Learning will be added soon.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default ML;