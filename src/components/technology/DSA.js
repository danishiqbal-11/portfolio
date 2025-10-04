

import React from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';

const DSA = () => {
  const arrayQuestions = [
    {
      title: 'Find the duplicate in an array of N+1 integers.',
      description: 'Given an array of N+1 integers, find the duplicate number. The integers are in the range [1, N].',
      solution: 'Use a hash set to store the numbers you have seen. If you see a number that is already in the hash set, that is the duplicate.',
      link: '#'
    },
    {
      title: 'Sort an array of 0s, 1s, and 2s.',
      description: 'Given an array of 0s, 1s, and 2s, sort the array in-place.',
      solution: 'Use the Dutch National Flag algorithm. Keep three pointers: low, mid, and high. Iterate through the array with the mid pointer. If the element is 0, swap it with the element at the low pointer and increment both low and mid. If the element is 1, just increment mid. If the element is 2, swap it with the element at the high pointer and decrement high.',
      link: '#'
    },
    {
      title: 'Find the missing number in an array.',
      description: 'Given an array of N-1 integers in the range [1, N], find the missing number.',
      solution: 'Calculate the sum of the first N natural numbers using the formula N*(N+1)/2. Then, calculate the sum of the elements in the array. The difference between these two sums is the missing number.',
      link: '#'
    },
    {
      title: 'Merge two sorted arrays without extra space.',
      description: 'Given two sorted arrays, merge them into a single sorted array without using any extra space.',
      solution: 'Start from the end of the first array and the beginning of the second array. If the element in the first array is greater than the element in the second array, swap them. Then, sort both arrays.',
      link: '#'
    },
    {
      title: 'Kadane\'s Algorithm',
      description: 'Find the contiguous sub-array with the largest sum.',
      solution: 'Initialize two variables: max_so_far and max_ending_here. Iterate through the array. For each element, add it to max_ending_here. If max_ending_here is greater than max_so_far, update max_so_far. If max_ending_here becomes negative, reset it to 0.',
      link: '#'
    },
    {
      title: 'Merge overlapping subintervals.',
      description: 'Given a collection of intervals, merge all overlapping intervals.',
      solution: 'Sort the intervals based on their start times. Then, iterate through the sorted intervals and merge any overlapping intervals.',
      link: '#'
    },
    {
      title: 'Find the majority element that appears more than N/2 times.',
      description: 'Given an array of N integers, find the majority element.',
      solution: 'Use Moore\'s Voting Algorithm. Initialize a candidate and a count. Iterate through the array. If the count is 0, set the candidate to the current element and the count to 1. If the current element is the same as the candidate, increment the count. Otherwise, decrement the count.',
      link: '#'
    },
    {
      title: 'Find the majority elements that appear more than N/3 times.',
      description: 'Given an array of N integers, find all the majority elements.',
      solution: 'Use a modified version of Moore\'s Voting Algorithm. Keep two candidates and two counts. Iterate through the array and update the candidates and counts.',
      link: '#'
    },
    {
      title: 'Grid Unique Paths',
      description: 'Find the number of unique paths from the top-left corner to the bottom-right corner of a grid.',
      solution: 'Use dynamic programming. Create a 2D array to store the number of unique paths to each cell. The number of unique paths to a cell is the sum of the number of unique paths to the cell above it and the cell to its left.',
      link: '#'
    },
    {
      title: 'Reverse Pairs',
      description: 'Given an array of integers, find the number of reverse pairs.',
      solution: 'Use a modified merge sort algorithm. While merging the two halves, count the number of reverse pairs.',
      link: '#'
    },
    {
      title: 'Search in a 2D matrix.',
      description: 'Search for a target value in a 2D matrix where each row and column is sorted.',
      solution: 'Start from the top-right corner of the matrix. If the target is smaller than the current element, move left. If the target is larger, move down.',
      link: '#'
    },
    {
      title: 'Pow(x, n)',
      description: 'Implement the pow(x, n) function.',
      solution: 'Use binary exponentiation. If n is even, calculate pow(x, n/2) and square it. If n is odd, calculate pow(x, (n-1)/2), square it, and multiply by x.',
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
                            <Accordion.Header>Solution</Accordion.Header>
                            <Accordion.Body>
                              {question.solution}
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
