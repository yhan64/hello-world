import tap from 'tap';
import { kClosestPoints } from './kClosestPoints';

interface TestCase {
  input: {
    points: number[][];
    origin: number[];
  };
  expectedOutput: number[][];
}
tap.test('k closest points...', (t) => {
  const testCases: TestCase[] = [
    {
      input: {
        points: [
          [4, 6],
          [4, 7],
          [4, 4],
          [2, 5],
          [1, 1],
        ],
        origin: [0, 0],
      },
      expectedOutput: [
        [1, 1],
        [2, 5],
        [4, 4],
      ],
    },
  ];

  testCases.forEach((testCase) => {
    const output = kClosestPoints(testCase.input.points, testCase.input.origin);
    t.same(output, testCase.expectedOutput);
  });
});
