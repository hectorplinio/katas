# Kata 6: filterEvenNumbers

## Exercise Statement

Given an array of numbers, return an array containing only the even numbers.

### Input

An array of numbers.

### Example

```typescript
const initialObject: Array<number> = [1, 2, 3, 4, 5, 6, 8, 4, 2];
```

### Output

A single array of numbers containing only the even numbers from the input array.

```typescript
[2, 4, 6, 8, 4, 2];
```

### Solution

The function filterEvenNumbers takes an array of numbers as input and returns an array of even numbers. The function uses the reduce method to filter out the even numbers.

### Code

```typescript
export const filterEvenNumbers = (
  inputParams: Array<number> = initialObject,
): Array<number> => {
  const evenNumbers = inputParams.reduce(
    (acc, number) => (number % 2 === 0 ? (acc = acc.concat(number)) : acc),
    [],
  );

  return evenNumbers;
};
```

### Explanation

The function filterEvenNumbers performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  - acc (accumulator) is initialized as an empty array [].
  - For each number in the array, if the number is even (number % 2 === 0), it concatenates the number to the accumulator.
    -Return: It returns the accumulated array which contains only the even numbers from the input array.
