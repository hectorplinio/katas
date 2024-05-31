# Kata 13: convertToGroupedObject

## Exercise Statement

Given an array of objects where each object has a key and a value, convert it into a single object where the keys are the unique values of the original keys and the values are arrays of the associated values.

### Input

An array of objects with key-value pairs.

### Example

```typescript
export interface KeyValueObject {
  category: string;
  item: string;
}

const initialObject: KeyValueObject[] = [
  { category: 'fruit', item: 'apple' },
  { category: 'fruit', item: 'banana' },
  { category: 'vegetable', item: 'carrot' },
  { category: 'vegetable', item: 'broccoli' },
  { category: 'fruit', item: 'orange' },
  { category: 'fruit', item: 'banana' },
];
```

### Output

A single object where the keys are the unique values of the original keys and the values are arrays of the associated values.

### Solution

The function convertToGroupedObject takes an array of objects as input and returns a single object with grouped values. It uses the reduce method with Set to avoid duplicates, and then converts the Set to arrays.

### Code

```typescript
export const convertToGroupedObject = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, Array<string>> => {
  const obj = inputParams.reduce(
    (acc, { category, item }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].includes(item) ? acc : acc[category].push(item);
      return acc;
    },
    {} as Record<string, Array<string>>,
  );
  return obj;
};
```

### Explanation

The function convertToGroupedObject performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method to create a single object from the array of key-value objects.
  - For each object in inputParams, it destructures the object into category and item.
  - If the category key does not exist in the accumulator (acc), it initializes it with an empty array.
  - It then checks if item is already present in the array using includes. If not, it adds item to the array.
- Return: It returns the created object which contains unique arrays of values for each key.
