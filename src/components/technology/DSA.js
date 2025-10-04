import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const DSA = () => {
  const arrayQuestions = [
    { title: 'Find the duplicate in an array of N+1 integers.', link: '#' },
    { title: 'Sort an array of 0s, 1s, and 2s.', link: '#' },
    { title: 'Find the missing number in an array.', link: '#' },
    { title: 'Merge two sorted arrays without extra space.', link: '#' },
    { title: 'Kadane\'s Algorithm', link: '#' },
    { title: 'Merge overlapping subintervals.', link: '#' },
    { title: 'Find the majority element that appears more than N/2 times.', link: '#' },
    { title: 'Find the majority elements that appear more than N/3 times.', link: '#' },
    { title: 'Grid Unique Paths', link: '#' },
    { title: 'Reverse Pairs', link: '#' },
    { title: 'Search in a 2D matrix.', link: '#' },
    { title: 'Pow(x, n)', link: '#' },
  ];

  return (
    <section id="dsa" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Data Structures and Algorithms</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Arrays</Accordion.Header>
            <Accordion.Body>
              <Row>
                {arrayQuestions.map((question, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Title>{question.title}</Card.Title>
                        <Card.Link href={question.link} target="_blank" rel="noopener noreferrer">
                          Solve Problem
                        </Card.Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default DSA;