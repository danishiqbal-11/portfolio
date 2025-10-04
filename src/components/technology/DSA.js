import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const DSA = () => {
  const arrayQuestions = [
    {
      title: 'Find the majority element that appears more than N/3 times.',
      description: 'Given an array of N integers, find all the majority elements that appear more than N/3 times.',
      solution: 
`
function findMajorityElements(nums) {
  let candidate1 = null, count1 = 0;
  let candidate2 = null, count2 = 0;

  // First pass to find candidates
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    } else if (count1 === 0) {
      candidate1 = num;
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = num;
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  // Second pass to verify candidates
  count1 = 0;
  count2 = 0;
  for (const num of nums) {
    if (num === candidate1) {
      count1++;
    } else if (num === candidate2) {
      count2++;
    }
  }

  const result = [];
  if (count1 > nums.length / 3) {
    result.push(candidate1);
  }
  if (count2 > nums.length / 3) {
    result.push(candidate2);
  }

  return result;
}
`,
      link: '#'
    },
    {
      title: 'Josephus Problem',
      description: 'There are N people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom. Given the total number of persons N and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.',
      solution: 
`
function josephus(n, k) {
  if (n === 1) {
    return 1;
  } else {
    return (josephus(n - 1, k) + k - 1) % n + 1;
  }
}
`,
      link: '#'
    },
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
                  <Col md={12} key={index} className="mb-3">
                    <Card>
                      <Card.Body>
                        <Card.Title>{question.title}</Card.Title>
                        <Card.Text>{question.description}</Card.Text>
                        <Accordion>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>Pseudo Code</Accordion.Header>
                            <Accordion.Body>
                              <pre>
                                <code>{question.solution}</code>
                              </pre>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                        <Card.Link href={question.link} target="_blank" rel="noopener noreferrer" className="mt-2 d-block">
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