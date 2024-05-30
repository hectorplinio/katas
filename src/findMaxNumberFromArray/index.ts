const initialObject: Array<number> = [1, 2, 3, 4, 5];

export const findMaxNumberFromArray = (
  inputParams: Array<number> = initialObject,
): number => {
  const maxNumber = inputParams.reduce(
    (acc, number) => (number > acc ? number : acc),
    0,
  );

  return maxNumber;
};