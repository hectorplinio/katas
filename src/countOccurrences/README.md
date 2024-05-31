# Kata 4: countOccurrences

## Exercise Statement

Given an array of strings, count how many times each string appears in the array and return an object with the counts.

### Input

An array of strings.

### Example

```typescript
const initialObject: Array<string> = [
  'apple',
  'banana',
  'apple',
  'orange',
  'banana',
  'apple',
];
```

### Output

An object where the keys are the strings from the input array, and the values are the counts of how many times each string appears in the array.

```typescript
{ apple: 3, banana: 2, orange: 1 }
```

### Solution

The function countOccurrences takes an array of strings as input and returns an object with the counts. The function uses the reduce method to count the occurrences of each string.

### Code

```typescript
export const countOccurrences = (
  inputParams: Array<string> = initialObject,
): Record<string, number> => {
  const count = inputParams.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});

  return count;
};
```

### Explanation

The function countOccurrences performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  acc (accumulator) is initialized as an empty object {}.
- For each fruit in the array, it increments the count of that fruit in the accumulator.
  Return: It returns the accumulated object with the counts.
