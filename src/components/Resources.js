import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Resources = () => {
  return (
    <section id="resources" className="py-5 bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="mb-4"><i className="bi bi-collection-fill text-primary"></i> This is the Resources Page</h2>
        </div>
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

export default Resources;
