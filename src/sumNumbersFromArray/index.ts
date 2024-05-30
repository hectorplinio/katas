const initialObject: Array<number> = [1, 2, 3, 4, 5];

export const sumNumbersFromArray = (
  inputParams: Array<number> = initialObject,
): number => {
  const sum = inputParams.reduce((acc, number) => {
    acc = acc + number;
    return acc;
  });

  return sum;
};
