const initialObject: string = '(a + b) * c';

export const validateParentheses = (
  inputParams: string = initialObject,
): boolean => {
  const stack: string[] = [];

  for (const char of inputParams) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};
