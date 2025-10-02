
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <p>&copy; {new Date().getFullYear()} Danish Iqbal. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
