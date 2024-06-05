# Kata 21: validateParentheses

## Exercise Statement

Given a string containing a formula, check that each opened parenthesis is closed properly. The function does not need to check anything else.

### Input

A string containing a formula.

### Example

```typescript
const initialObject: string = '(a + b) * c';
```

### Output

A boolean indicating whether the parentheses in the string are properly balanced.

```typescript
true;
```

### Solution

The function validateParentheses takes a string and returns a boolean indicating whether the parentheses in the string are properly balanced.

### Code

```typescript
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
```

### Explanation

The function validateParentheses performs the following steps:

- Parameters: Takes a string containing a formula (inputParams).
- Stack: Uses a stack to keep track of opened parentheses.
- Loop: Iterates through the string, pushes each opening parenthesis onto the stack, and pops from the stack for each closing parenthesis.
- Return: Returns true if all opened parentheses are properly closed (i.e., the stack is empty at the end), otherwise returns false.
