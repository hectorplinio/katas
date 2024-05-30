# Kata 3: findMaxNumber

## Exercise Statement

Given an array of numbers, find and return the maximum number in the array.

### Input

An array of numbers.

### Example

```typescript
const initialObject: Array<number> = [1, 2, 3, 4, 5];
```

### Output

A single number representing the maximum number in the input array.

### Solution

The function findMaxNumber takes an array of numbers as input and returns the maximum number. The function uses the reduce method to find the maximum number.

### Code

```typescript
export const findMaxNumber = (
  inputParams: Array<number> = initialObject,
): number => {
  const maxNumber = inputParams.reduce(
    (acc, number) => (number > acc ? number : acc),
    0,
  );

  return maxNumber;
};
```

### Explanation

The function findMaxNumber performs the following steps:

-Parameters: It takes an optional parameter inputParams which defaults to initialObject.
-Reduce Method: It uses the reduce method on the inputParams array.
acc (accumulator) is initialized to the first element of the array.
-For each number in the array, it checks if the number is greater than the accumulator. If true, it updates the accumulator to the current number.
Return: It returns the accumulated maximum number.
