const initialObject: Array<number> = [1, 2, 3, 4, 5, 6, 8, 4, 2];

export const filterEvenNumberInArray = (
  inputParams: Array<number> = initialObject,
): Array<number> => {
  const evenNumbers = inputParams.reduce(
    (acc, number) => (number % 2 === 0 ? (acc = acc.concat(number)) : acc),
    [],
  );

  return evenNumbers;
};
