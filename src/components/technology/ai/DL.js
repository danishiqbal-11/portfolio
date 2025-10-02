import React from 'react';
import { Container, Card } from 'react-bootstrap';

const DL = () => {
  return (
    <section id="dl" className="py-5 bg-light">
      <Container>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <i className="bi bi-cpu-fill fs-1 text-success"></i>
            <h2 className="mt-3">Deep Learning</h2>
            <p className="lead">
              This section is under construction. Content about Deep Learning will be added soon.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default DL;