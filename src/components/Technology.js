import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Technology = () => {
  return (
    <section id="technology" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Technology</h2>
        <ListGroup>
          <ListGroup.Item action as={Link} to="/technology/dsa">
            1. Data Structure and Algorithms
          </ListGroup.Item>
          <ListGroup.Item action as={Link} to="/technology/lld">
            2. Low Level Design
          </ListGroup.Item>
          <ListGroup.Item action as={Link} to="/technology/hld">
            3. High Level Design
          </ListGroup.Item>
          <ListGroup.Item>
            4. Artificial Intelligence
            <ListGroup className="mt-2">
              <ListGroup.Item action as={Link} to="/technology/ai/ml">
                Machine Learning
              </ListGroup.Item>
              <ListGroup.Item action as={Link} to="/technology/ai/dl">
                Deep Learning
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </section>
  );
};

export default Technology;