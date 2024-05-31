# Kata 14: countValueFrequency

## Exercise Statement

Given an array of objects, count how many times each value of a specific property appears.

### Input

An array of key-value objects, where each object has a single key item.

### Example

```typescript
export type KeyValueObject = Record<string, string>;

const initialObject: KeyValueObject[] = [
  { item: 'apple' },
  { item: 'banana' },
  { item: 'carrot' },
  { item: 'broccoli' },
  { item: 'orange' },
  { item: 'banana' },
];
```

### Output

An object containing the frequency of each value of the specified property.

```typescript
{ apple: 1, banana: 2, carrot: 1, broccoli: 1, orange: 1 }
```

### Solution

The function countValueFrequency takes an array of objects as input and returns an object with the frequency of each value for the specified property.

### Code

```typescript
export const countValueFrequency = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, number> => {
  const obj = inputParams.reduce(
    (acc, { item }) => {
      if (!acc[item]) {
        acc[item] = 0;
      }
      acc[item]++;
      return acc;
    },
    {} as Record<string, number>,
  );
  return obj;
};
```

### Explanation

The function countValueFrequency performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method to create a single object that contains the frequency of each value of the item property.
  -For each object in inputParams, it destructures the object to get the item value.
  - If the item key does not exist in the accumulator (acc), it initializes it with a count of 0.
  - It then increments the count for the item key.
- Return: It returns the created object which contains the frequency of each value of the item property.
