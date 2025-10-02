
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Technology = () => {
  return (
    <section id="technology" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Technology</h2>
        <p className="text-center mb-4">
          With 6.5 years of experience as a Senior Engineer at Qualcomm, I have a deep passion for technology and problem-solving.
        </p>
        <Row>
          <Col md={6} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Data Structures & Algorithms</Card.Title>
                <Card.Text>
                  I have a strong foundation in DSA, which is crucial for writing efficient and scalable code.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>High-Level & Low-Level Design</Card.Title>
                <Card.Text>
                  I am experienced in designing complex systems, from the high-level architecture to the low-level implementation details.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>C++</Card.Title>
                <Card.Text>
                  I have extensive experience in C++, a powerful language for performance-critical applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>ML to LLMs</Card.Title>
                <Card.Text>
                  I am passionate about the latest advancements in AI, from traditional Machine Learning to cutting-edge Large Language Models.
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
