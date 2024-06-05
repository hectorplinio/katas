import { validateParentheses } from '.';

export const testCases = [
  {
    input: '(a+b)',
    expected: true,
    description: 'should return true for a properly closed parenthesis',
  },
  {
    input: '(a+b',
    expected: false,
    description: 'should return false for an improperly closed parenthesis',
  },
  {
    input: '(a+b)*(c-d)',
    expected: true,
    description: 'should return true for multiple properly closed parentheses',
  },
  {
    input: '(a+b)*(c-d',
    expected: false,
    description:
      'should return false for multiple improperly closed parentheses',
  },
  {
    input: '(',
    expected: false,
    description: 'should return false for a single opening parenthesis',
  },
  {
    input: ')',
    expected: false,
    description: 'should return false for a single closing parenthesis',
  },
  {
    input: '',
    expected: true,
    description: 'should return true for an empty string',
  },
  {
    input: undefined,
    expected: true,
    description: 'should return true for an empty string',
  },
];

describe('validateParentheses', () => {
  testCases.forEach(({ input, expected, description }) => {
    it(description, () => {
      expect(validateParentheses(input)).toBe(expected);
    });
  });
});
