
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dsaBlogs } from '../../data/dsaBlogs';

const DSABlogs = () => {
  return (
    <section id="dsa-blogs" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Data Structures and Algorithms Blogs</h2>
        <Row>
          {dsaBlogs.map((blog) => (
            <Col md={6} lg={4} key={blog.id} className="mb-4">
              <Card as={Link} to={blog.path} className="text-decoration-none h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DSABlogs;
