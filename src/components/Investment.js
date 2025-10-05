
import React from 'react';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const Investment = () => {
  return (
    <section id="investment" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-4"><i className="bi bi-graph-up-arrow text-primary"></i> Investment Philosophy</h2>
          <p className="lead">
            I follow a hybrid investment strategy that combines the principles of Peter Lynch (growth) and Warren Buffet (value). I believe in long-term investing and the power of compounding.
          </p>
        </div>

        <Alert variant="warning" className="shadow-sm">
          <Alert.Heading><i className="bi bi-exclamation-triangle-fill"></i> Disclaimer</Alert.Heading>
          <p>
            I am not a SEBI registered advisor. The information provided here is for educational purposes only. I may have personal holdings in the companies mentioned. Please do your own research before investing.
          </p>
        </Alert>

        <hr className="my-5" />

        <h3 className="text-center my-4">Financial & Investment Knowledge</h3>
        <Row className="justify-content-center">
          <Col md={6} className="mb-4">
            <Card as={Link} to="/investment/blogs" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-book-half fs-1 text-success"></i>
                  <Card.Title className="mt-3">Blogs</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read All Blogs</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr className="my-5" />

        <h3 className="text-center my-4">Latest Blogs</h3>
        <Row className="justify-content-center">
          {blogPosts.slice(0, 3).map((post) => (
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

        <hr className="my-5" />

        <h3 className="text-center my-4">Company Analysis</h3>
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

        <hr className="my-5" />

        <h3 className="text-center my-4">Resources</h3>
        <Row>
          <Col md={4} className="mb-4">
            <Card as="a" href="https://www.youtube.com/watch?v=oj7l_0Moxs8&list=PL6WVSL3D1Ek9ukPuR_tDCRRQiaOulxx1N" target="_blank" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-film fs-1 text-danger"></i>
                  <Card.Title className="mt-3">Behavioural Finance</Card.Title>
                </div>
                <Card.Text className="text-center">
                  A playlist of videos on behavioural finance by Parag Parikh at GIM.
                </Card.Text>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Watch on YouTube</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Investment;
