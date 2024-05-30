const initialObject: Array<number> = [1, 2, 3, 4, 5, 2, 3, 4, 2, 1, 41, 4, 1];

export const uniqueValues = (
  inputParams: Array<number> = initialObject,
): Array<number> => {
  const uniqueNumbers = [...new Set(inputParams)];
  return uniqueNumbers;
};
