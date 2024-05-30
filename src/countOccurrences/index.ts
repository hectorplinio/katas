const initialObject: Array<string> = [
  'apple',
  'banana',
  'apple',
  'orange',
  'banana',
  'apple',
];

export const countOccurrences = (
  inputParams: Array<string> = initialObject,
): Record<string, number> => {
  const count = inputParams.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  }, {});

  return count;
};
