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

export const extractBookNameFromArray = (
  inputParams: InputParams[] = initialObject,
): Array<string> => {
  const booksNames = inputParams.reduce(
    (acc, obj) => acc.concat(obj.books),
    [],
  );

  return booksNames;
};
