# Book Extraction Kata

## Exercise Statement

Given an array of people, each with an array of books, extract all the books into a single array.

### Input

An array of objects, where each object represents a person with the following properties:

- `name` (string): The name of the person.
- `books` (Array<string>): An array of book titles owned by the person.
- `age` (number): The age of the person.

### Example

```typescript
export interface InputParams {
  name: string;
  books: Array<string>;
  age: number;
}

const initialObject: InputParams[] = [
  { name: 'John', books: ['The Lord of the rings', 'The Hobbit'], age: 18 },
  { name: 'Peter', books: ['The Bible', 'The Bible'], age: 50 },
  { name: 'Jack', books: ['The Alchemist', 'The Da Vinci Code'], age: 30 },
  {
    name: 'John',
    books: ['The Twilight Saga', 'Alice in Wonderland'],
    age: 22,
  },
];
```

### Output

An array of strings, where each string is a book title extracted from the input array of people.

```typescript
[
  'The Lord of the rings',
  'The Hobbit',
  'The Bible',
  'The Bible',
  'The Alchemist',
  'The Da Vinci Code',
  'The Twilight Saga',
  'Alice in Wonderland',
];
```

### Solution

An array of strings, where each string is a book title extracted from the input array of people.

### Code

```typescript
export const extractBookNames = (
  inputParams: InputParams[] = initialObject,
): Array<string> => {
  const booksNames = inputParams.reduce(
    (acc, obj) => acc.concat(obj.books),
    [],
  );

  return booksNames;
};
```

### Explanation

The function extractBookNames performs the following steps:

- Parameters: It takes an optional parameter inputParams which defaults to initialObject.
- Reduce Method: It uses the reduce method on the inputParams array.
  acc (accumulator) is initialized as an empty array [].
- For each person (obj) in the array, it concatenates their books array to the accumulator.
  Return: It returns the accumulated array of book titles.
