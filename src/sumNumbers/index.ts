const initialObject: Array<number> = [1, 2, 3, 4, 5];

export const sumNumbers = (
  inputParams: Array<number> = initialObject,
): number => {
  const sum = inputParams.reduce((acc, number) => acc + number, 0);

  return sum;
};
