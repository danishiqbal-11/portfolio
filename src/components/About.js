
import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <Container className="py-5">
      <div className="text-center">
        <Image src={profileImage} roundedCircle fluid style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        <h1 className="mt-4">Danish Iqbal</h1>
        <p className="lead text-muted">Software Engineer | Investor </p>
      </div>
      <hr />
      <h2 className="my-4 text-center">Experience</h2>
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
      <hr />
      <h2 className="my-4 text-center">Achievements</h2>
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
