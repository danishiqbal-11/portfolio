import React, { useState } from 'react';
import { Button, Card, Accordion } from 'react-bootstrap';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Arrays = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  const codeString1 = `
    function findMajorityElement(nums):
      count = 0
      candidate = null

      for each num in nums:
        if count == 0:
          candidate = num
        if num == candidate:
          count = count + 1
        else:
          count = count - 1

      return candidate
  `;

  const codeString2 = `
    function findMajorityElementsN3(nums):
      if nums is empty:
        return []

      candidate1, candidate2 = null, null
      count1, count2 = 0, 0

      for each num in nums:
        if num == candidate1:
          count1 = count1 + 1
        else if num == candidate2:
          count2 = count2 + 1
        else if count1 == 0:
          candidate1 = num
          count1 = 1
        else if count2 == 0:
          candidate2 = num
          count2 = 1
        else:
          count1 = count1 - 1
          count2 = count2 - 1

      result = []
      count1, count2 = 0, 0

      for each num in nums:
        if num == candidate1:
          count1 = count1 + 1
        else if num == candidate2:
          count2 = count2 + 1

      if count1 > length(nums) / 3:
        add candidate1 to result
      if count2 > length(nums) / 3:
        add candidate2 to result

      return result
  `;

  const codeString3 = `
    function josephus(n, k):
      if n == 1:
        return 1
      else:
        return (josephus(n - 1, k) + k - 1) % n + 1
  `;

  return (
    <Accordion defaultActiveKey="0">
      <Card className="mb-3">
        <Accordion.Header>Arrays</Accordion.Header>
        <Accordion.Body>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Majority Element > n/2</Card.Title>
              <Card.Text>
                The majority element is the element that appears more than ⌊n / 2⌋ times.
                You may assume that the majority element always exists in the array.
              </Card.Text>
              <Card.Text>
                <strong>Example 1:</strong> Input: [3, 2, 3], Output: 3
              </Card.Text>
              <Card.Text>
                <strong>Example 2:</strong> Input: [2, 2, 1, 1, 1, 2, 2], Output: 2
              </Card.Text>
              <Button variant="primary" onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? 'Hide Solution' : 'Show Solution'}
              </Button>
              {showSolution && (
                <div className="mt-3">
                  <SyntaxHighlighter language="plaintext" style={a11yDark}>
                    {codeString1}
                  </SyntaxHighlighter>
                </div>
              )}
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Majority Element > n/3</Card.Title>
              <Card.Text>
                Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
              </Card.Text>
              <Card.Text>
                <strong>Example 1:</strong> Input: [3, 2, 3], Output: [3]
              </Card.Text>
              <Card.Text>
                <strong>Example 2:</strong> Input: [1, 1, 1, 3, 3, 2, 2, 2], Output: [1, 2]
              </Card.Text>
              <Button variant="primary" onClick={() => setShowSolution2(!showSolution2)}>
                {showSolution2 ? 'Hide Solution' : 'Show Solution'}
              </Button>
              {showSolution2 && (
                <div className="mt-3">
                  <h5>Explanation</h5>
                  <p>
                    This problem can be solved using a modified version of the Boyer-Moore Voting Algorithm. Since we are looking for elements that appear more than n/3 times, there can be at most two such elements.
                  </p>
                  <p>
                    We can maintain two candidates and two counters. We iterate through the array. If the current element is one of the candidates, we increment its counter. If a counter is zero, we set the current element as the new candidate. If the current element is not any of the candidates, we decrement both counters.
                  </p>
                  <p>
                    After the first pass, we have two candidates. In the second pass, we count their occurrences and if they are greater than n/3, we add them to the result.
                  </p>
                  <SyntaxHighlighter language="plaintext" style={a11yDark}>
                    {codeString2}
                  </SyntaxHighlighter>
                </div>
              )}
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Josephus Problem</Card.Title>
              <Card.Text>
                There are n people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the a fixed direction. In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.
              </Card.Text>
              <Card.Text>
                Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.
              </Card.Text>
              <Card.Text>
                <strong>Example:</strong> Input: n = 5, k = 2, Output: 3
              </Card.Text>
              <Button variant="primary" onClick={() => setShowSolution3(!showSolution3)}>
                {showSolution3 ? 'Hide Solution' : 'Show Solution'}
              </Button>
              {showSolution3 && (
                <div className="mt-3">
                  <h5>Explanation</h5>
                  <p>
                    The problem can be solved using recursion. For a given n and k, we can determine the position of the survivor. The problem has a recursive structure.
                  </p>
                  <p>
                    Let `josephus(n, k)` be the position of the survivor with n people and skipping k-1 people.
                    When we execute the first person (at position k-1), we are left with n-1 people. The circle is now smaller. The counting starts from the position where the last person was executed.
                  </p>
                  <p>
                    The recursive formula is: `josephus(n, k) = (josephus(n - 1, k) + k-1) % n + 1`
                  </p>
                  <SyntaxHighlighter language="plaintext" style={a11yDark}>
                    {codeString3}
                  </SyntaxHighlighter>
                </div>
              )}
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Card>
    </Accordion>
  );
};

export default Arrays;

