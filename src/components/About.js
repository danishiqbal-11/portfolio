
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Senior Software Engineer at Qualcomm</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">December 2022 - Present</Card.Subtitle>
              <ul>
                <li>Contributed to the development of SDK (QAIRT) for optimizing deep learning models on CPU, GPU, and DSP.</li>
                <li>Designed and implemented granular DSP clock control, exposing APIs that allow customers to fine-tune clock frequencies for better performance and power efficiency.</li>
                <li>Successfully troubleshot and resolved 30+ customer-reported issues, improving system stability and user experience.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Software Engineer at Samsung</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">June 2019 - December 2022</Card.Subtitle>
              <ul>
                <li>Developed and integrated carrier apps and modules for Samsung Android devices and smartwatches.</li>
                <li>Implemented automation for bootable binary creation, cutting security update release time by 30% and enhancing system reliability.</li>
                <li>Collaborated with cross-functional teams to deliver timely software updates with high reliability.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
