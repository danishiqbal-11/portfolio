import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card className="shadow-sm">
          <Card.Body>
            <h2 className="text-center mb-4"><i className="bi bi-book-half text-success"></i> Financial & Investment Knowledge</h2>
            <p className="lead text-center">
              Explore articles and insights on various financial and investment topics.
            </p>
            <hr className="my-4" />
            <ListGroup variant="flush">
              <ListGroup.Item action as={Link} to="/investment/blogs/peter-lynch-companies">
                Six Types of Companies According to Peter Lynch
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Blogs;