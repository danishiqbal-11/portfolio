
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Arrays = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title as="h2" className="text-center mb-4">Introduction to Arrays</Card.Title>
            <Card.Text>
              An array is a collection of items of same data type stored at contiguous memory locations. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Arrays;
