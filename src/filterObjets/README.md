# Kata 8: filterObjects

## Exercise Statement

Given an array of objects, filter the objects based on a specified category and quantity greater than 0, and return an array of objects that match the criteria.

### Input

1. An array of objects, where each object contains key-value pairs including a category and quantity.
2. A string representing the category to filter by.

### Example

```typescript
export interface InputParams {
  name: string;
  data: Record<string, string | number>;
}

const initialObject: InputParams[] = [
  { name: 'apple', data: { category: 'fruit', quantity: 1 } },
  { name: 'carrot', data: { category: 'vegetable', quantity: 5 } },
  { name: 'banana', data: { category: 'fruit', quantity: 3 } },
  { name: 'broccoli', data: { category: 'vegetable', quantity: 6 } },
  { name: 'orange', data: { category: 'fruit', quantity: 0 } },
];
const filterParam: string = 'fruit';
```

### Output

An array of objects that match the specified category and have a quantity greater than 0.

```typescript
[
  { name: 'apple', data: { category: 'fruit', quantity: 1 } },
  { name: 'banana', data: { category: 'fruit', quantity: 3 } },
];
```

### Solution

The function filterObjects takes an array of objects and a category string as input and returns an array of objects that match the category and have a quantity greater than 0. The function uses the reduce method to filter the objects based on the specified criteria.

### Code

```typescript
export const filterObjects = (
  inputParams: InputParams[] = initialObject,
  filterParam: string,
): InputParams[] => {
  const inputParamsFiltered = inputParams.reduce((acc, object) => {
    const { category, quantity } = object.data;
    if (category === filterParam && (quantity as number) > 0) {
      acc.push(object);
    }
    return acc;
  }, [] as InputParams[]);

  return inputParamsFiltered;
};
```

### Explanation

The function filterObjects performs the following steps:

- Parameters: It takes two parameters:
  - inputParams (optional) which defaults to initialObject.
  - filterParam which is a string representing the category to filter by.
- Reduce Method: It uses the reduce method on the inputParams array.
  - acc (accumulator) is initialized as an empty array [].
  - For each object in the array, it destructures category and quantity from object.data.
  - If category matches filterParam and quantity is greater than 0, the object is added to the accumulator using acc.push(object).
- Return: It returns the accumulated array of objects that match the specified category and have a quantity greater than 0.
