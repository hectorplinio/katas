export type KeyValuePair = [string, string | number];

const initialObject: KeyValuePair[] = [
  ['name', 'Alice'],
  ['age', 25],
  ['city', 'New York'],
];

export const keyValuePairsToObject = (
  inputParams: KeyValuePair[] = initialObject,
): Record<string, string | number> => {
  const obj = inputParams.reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string | number>,
  );
  return obj;
};
