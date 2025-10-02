import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Blogs = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card className="text-center shadow-sm">
          <Card.Body>
            <i className="bi bi-book-half fs-1 text-success"></i>
            <h2 className="mt-3">Financial & Investment Knowledge</h2>
            <p className="lead">
              Blogs coming soon.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Blogs;