
import React from 'react';
import { Container, Alert, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                  <span className="btn btn-primary">Read Blogs</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <hr className="my-5" />

        <h3 className="text-center my-4">Company Analysis</h3>
        <Row>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/motilal-oswal" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Motilal Oswal Financial Services Ltd</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
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
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/ashoka-buildcon" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Ashoka Buildcon Ltd</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/persistent-systems" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Persistent Systems Limited</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/torrent-power" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Torrent Power Limited</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/aurobindo-pharma" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Aurobindo Pharma Limited</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/muthoot-finance" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className_="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">Muthoot Finance Limited</Card.Title>
                </div>
                <div className="text-center mt-auto">
                  <span className="btn btn-primary">Read Analysis</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card as={Link} to="/investment/pi-industries" className="text-decoration-none h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <div className="text-center">
                  <i className="bi bi-building fs-1 text-primary"></i>
                  <Card.Title className="mt-3">PI Industries Limited</Card.Title>
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

export default Investment;
