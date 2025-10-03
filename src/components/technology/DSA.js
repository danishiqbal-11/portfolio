import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Arrays from './dsa/Arrays';

const DSA = () => {
  return (
    <Container fluid className="py-5">
      <Row>
        <Col xs={2}>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="arrays">Arrays</Nav.Link>
            {/* Add more links for other DSA topics here */}
          </Nav>
        </Col>
        <Col xs={10}>
          <Routes>
            <Route path="arrays" element={<Arrays />} />
            {/* Add more routes for other DSA topics here */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default DSA;