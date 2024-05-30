# Kata 2: sumNumbersFromArray

## Exercise Statement

Given an array of numbers, return the sum of all the numbers in the array.

### Input

An array of numbers.

### Example

```typescript
const initialObject: Array<number> = [1, 2, 3, 4, 5];
```

### Output

A single number representing the sum of all numbers in the input array.

### Solution

The function sumNumbersFromArray takes an array of numbers as input and returns their sum. The function uses the reduce method to sum the numbers.

### Code

```typescript
export const sumNumbersFromArray = (
  inputParams: Array<number> = initialObject,
): number => {
  const sum = inputParams.reduce((acc, number) => {
    acc = acc + number;
    return acc;
  });

  return sum;
};
```

### Explanation

The function sumNumbersFromArray performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  acc (accumulator) is initialized to 0.
- For each number in the array, it adds the number to the accumulator.
  Return: It returns the accumulated sum.
