const initialObject: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

export const flatten = (
  inputParams: Array<Array<number>> = initialObject,
): Array<number> => {
  const booksNames = inputParams.reduce((acc, obj) => acc.concat(obj), []);

  return booksNames;
};
