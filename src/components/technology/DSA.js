import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

const DSA = () => {
  const [showSolution, setShowSolution] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    <Container className="py-5">
      <h2>Data Structure and Algorithms</h2>
      <p>This page will contain details about Data Structure and Algorithms.</p>

      <hr />

      <h3>Arrays</h3>
      <h4>Majority Element > n/2</h4>
      <p>
        The majority element is the element that appears more than ⌊n / 2⌋ times.
        You may assume that the majority element always exists in the array.
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Input: [3, 2, 3]
        <br />
        Output: 3
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Input: [2, 2, 1, 1, 1, 2, 2]
        <br />
        Output: 2
      </p>
      <Button variant="primary" onClick={() => setShowSolution(!showSolution)}>
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </Button>
      {showSolution && (
        <pre>
          <code>
            {`
    public int majorityElement(int[] nums) {
        int count = 0;
        Integer candidate = null;

        for (int num : nums) {
            if (count == 0) {
                candidate = num;
            }
            count += (num == candidate) ? 1 : -1;
        }

        return candidate;
    }
            `}
          </code>
        </pre>
      )}

      <hr />

      <h4>Majority Element > n/3</h4>
      <p>
        Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Input: [3, 2, 3]
        <br />
        Output: [3]
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Input: [1, 1, 1, 3, 3, 2, 2, 2]
        <br />
        Output: [1, 2]
      </p>
      <Button variant="primary" onClick={() => setShowSolution2(!showSolution2)}>
        {showSolution2 ? 'Hide Solution' : 'Show Solution'}
      </Button>
      {showSolution2 && (
        <div>
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
          <pre>
            <code>
              {`
    public List<Integer> majorityElement(int[] nums) {
        if (nums == null || nums.length == 0) {
            return new ArrayList<Integer>();
        }
        List<Integer> result = new ArrayList<Integer>();
        int number1 = nums[0], number2 = nums[0], count1 = 0, count2 = 0, len = nums.length;
        for (int i = 0; i < len; i++) {
            if (nums[i] == number1)
                count1++;
            else if (nums[i] == number2)
                count2++;
            else if (count1 == 0) {
                number1 = nums[i];
                count1 = 1;
            } else if (count2 == 0) {
                number2 = nums[i];
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
        count1 = 0;
        count2 = 0;
        for (int i = 0; i < len; i++) {
            if (nums[i] == number1)
                count1++;
            else if (nums[i] == number2)
                count2++;
        }
        if (count1 > len / 3)
            result.add(number1);
        if (count2 > len / 3)
            result.add(number2);
        return result;
    }
              `}
            </code>
          </pre>
        </div>
      )}

      <hr />

      <h4>Josephus Problem</h4>
      <p>
        There are n people standing in a circle waiting to be executed. The counting out begins at some point in the circle and proceeds around the circle in a fixed direction. In each step, a certain number of people are skipped and the next person is executed. The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.
      </p>
      <p>
        Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle. The task is to choose the place in the initial circle so that you are the last one remaining and so survive.
      </p>
      <p>
        <strong>Example:</strong>
        <br />
        Input: n = 5, k = 2
        <br />
        Output: 3
      </p>
      <Button variant="primary" onClick={() => setShowSolution3(!showSolution3)}>
        {showSolution3 ? 'Hide Solution' : 'Show Solution'}
      </Button>
      {showSolution3 && (
        <div>
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
          <pre>
            <code>
              {`
    public int josephus(int n, int k) {
        if (n == 1) {
            return 1;
        } else {
            /* The position returned by josephus(n - 1, k) is adjusted because the
            recursive call josephus(n - 1, k) considers the original position
            k%n + 1 as position 1 */
            return (josephus(n - 1, k) + k - 1) % n + 1;
        }
    }
              `}
            </code>
          </pre>
        </div>
      )}
    </Container>
  );
};

export default DSA;