const initialObject: Array<number> = [1, 2, 3, 4, 5];

export const findMaxNumber = (
  inputParams: Array<number> = initialObject,
): number => {
  const maxNumber = inputParams.reduce((acc, number) =>
    number > acc ? number : acc,
  );

  return maxNumber;
};
