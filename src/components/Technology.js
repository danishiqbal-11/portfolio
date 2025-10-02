import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Technology = () => {
  return (
    <section id="technology" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Technical Skills</h2>
        <Row>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Languages</Card.Title>
                <Card.Text>
                  C, C++, Algorithms, Data Structures
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Developer Tools</Card.Title>
                <Card.Text>
                  VS Code, IntelliJ IDEA, CLion
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Technologies/Frameworks</Card.Title>
                <Card.Text>
                  Linux, GitHub, Perforce
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Video Frame Interpolation using GANs</Card.Title>
                <Card.Text>
                  Generated extra frames between video frames using methods like Average of pixels, Regression, and Generative Adversarial Network.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Substitution Box Design Using Optimized DAP</Card.Title>
                <Card.Text>
                  Deduced the method of generating S-Box by incremental approach with low Differential Approximation Probability.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Geodetic Datum Conversion Tool</Card.Title>
                <Card.Text>
                  Developed a geodetic datum inter-conversion tool for the Ministry of Defense, India.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technology;