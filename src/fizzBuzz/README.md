# Kata 17: fizzBuzz

## Exercise Statement

Write a program that outputs the string representation of numbers from 1 to n. But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

### Input

An integer n.

### Example

```typescript
const n: number = 15;
```

### Output

An array of strings with the FizzBuzz representation from 1 to n.

### Solution

The function fizzBuzz takes an integer n and returns an array of strings.

### Code

```typescript
export const fizzBuzz = (inputParam: number): string[] => {
  const output = Array.from({ length: inputParam }, (_, i) => {
    const num = i + 1;
    return num % 15 === 0
      ? 'FizzBuzz'
      : num % 3 === 0
        ? 'Fizz'
        : num % 5 === 0
          ? 'Buzz'
          : num.toString();
  });

  return output;
};
```

### Explanation

The function fizzBuzz performs the following steps:

- Parameters: Takes an integer (n).
- Loop: Iterates from 1 to n.
- Conditions: Checks divisibility by 3 and 5.
- Result Array: Pushes the appropriate string into the result array.
