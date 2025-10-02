import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs'; // Import blog posts data

const Blogs = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5"><i className="bi bi-book-half text-success"></i> Financial & Investment Knowledge</h2>
        <Row>
          {blogPosts.map((post) => (
            <Col md={6} lg={4} className="mb-4" key={post.id}>
              <Card className="h-100 shadow-sm">
                <Card.Body className="d-flex flex-column">
                  <Card.Title as="h5">{post.title}</Card.Title>
                  <Card.Text className="text-muted flex-grow-1">
                    {post.description}
                  </Card.Text>
                  <Link to={post.path} className="btn btn-primary mt-auto">Read More</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Blogs;