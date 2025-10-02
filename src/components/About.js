import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <Container className="py-5 text-center">
      <Image src={profileImage} roundedCircle fluid style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h1 className="mt-4">Danish Iqbal</h1>
      <p className="lead text-muted">Software Engineer | Investor | Entrepreneur</p>
      <hr />
      <h2 className="my-4">Achievements</h2>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <ul>
                <li>Achieved top performance rating at Samsung RD Institute (Noida) and in Qualcomm.</li>
                <li>Secured 98.3 percentile in JEE Mains 2015 (Top 1.7% among 1.2M candidates).</li>
                <li>Secured 98.1 percentile in GATE CSE 2019 (Top 2% among 90K candidates).</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;