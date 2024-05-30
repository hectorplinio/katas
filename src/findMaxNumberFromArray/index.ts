const initialObject: Array<number> = [1, 2, 3, 4, 5];

export const findMaxNumberFromArray = (
  inputParams: Array<number> = initialObject,
): number => {
  const maxNumber = inputParams.reduce((acc, number) => {
    if (number > acc) {
      acc = number;
    }
    return acc;
  });

  return maxNumber;
};
