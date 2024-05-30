# Kata 5: flatten

## Exercise Statement

Given an array of arrays of numbers, flatten it into a single array of numbers.

### Input

An array of arrays of numbers.

### Example

```typescript
const initialObject: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
```

### Output

A single array of numbers containing all the numbers from the input arrays.

### Solution

The function flatten takes an array of arrays of numbers as input and returns a single flattened array of numbers. The function uses the reduce method to concatenate all the sub-arrays.

### Code

```typescript
export const flatten = (
  inputParams: Array<Array<number>> = initialObject,
): Array<number> => {
  const booksNames = inputParams.reduce((acc, obj) => acc.concat(obj), []);

  return booksNames;
};
```

### Explanation

The function flatten performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  - acc (accumulator) is initialized as an empty array [].
  - For each obj (sub-array) in the array, it concatenates the sub-array to the accumulator.
- Return: It returns the accumulated array which is the flattened version of the input array.
