
import React from 'react';
import { Container, Alert } from 'react-bootstrap';

const Investment = () => {
  return (
    <section id="investment" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Investment Philosophy</h2>
        <Alert variant="warning">
          <Alert.Heading>Disclaimer</Alert.Heading>
          <p>
            I am not a SEBI registered advisor. The information provided here is for educational purposes only. I may have personal holdings in the companies mentioned. Please do your own research before investing.
          </p>
        </Alert>
        <p className="lead text-center">
          I follow a hybrid investment strategy that combines the principles of Peter Lynch (growth) and Warren Buffet (value). I believe in long-term investing and the power of compounding.
        </p>
        <p className="text-center">
          I will be sharing my company-wise analysis and other investment-related blogs here in the future.
        </p>
      </Container>
    </section>
  );
};

export default Investment;
