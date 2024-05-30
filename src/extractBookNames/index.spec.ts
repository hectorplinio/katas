import { extractBookNames, InputParams } from '.';

describe('extractBookNames', () => {
  it('Not passing input parameters', () => {
    const booksNames = extractBookNames();
    expect(booksNames).toEqual([
      'The Lord of the rings',
      'The Hobbit',
      'The Bible',
      'The Bible',
      'The Alchemist',
      'The Da Vinci Code',
      'The Twilight Saga',
      'Alice in Wonderland',
    ]);
  });

  it('Given an input params, should be return the books name', () => {
    const inputParams: InputParams[] = [
      {
        name: 'John',
        books: ['Don Quixote', 'The Picture of Dorian Gray'],
        age: 18,
      },
      {
        name: 'Peter',
        books: ['The Adventures of Huckleberry Finn', 'Wuthering Heights'],
        age: 50,
      },
      {
        name: 'Jack',
        books: ['The Adventures of Tom Sawyer', '1984'],
        age: 30,
      },
      {
        name: 'John',
        books: ['The Great Gatsby', 'Emma'],
        age: 22,
      },
    ];
    const booksNames = extractBookNames(inputParams);

    expect(booksNames).toEqual([
      'Don Quixote',
      'The Picture of Dorian Gray',
      'The Adventures of Huckleberry Finn',
      'Wuthering Heights',
      'The Adventures of Tom Sawyer',
      '1984',
      'The Great Gatsby',
      'Emma',
    ]);
  });
});
