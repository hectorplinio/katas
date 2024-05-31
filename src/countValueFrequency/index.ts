export type KeyValueObject = Record<string, string>;

const initialObject: KeyValueObject[] = [
  { item: 'apple' },
  { item: 'banana' },
  { item: 'carrot' },
  { item: 'broccoli' },
  { item: 'orange' },
  { item: 'banana' },
];

export const countValueFrequency = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, number> => {
  const obj = inputParams.reduce(
    (acc, { item }) => {
      if (!acc[item]) {
        acc[item] = 0;
      }
      acc[item]++;
      return acc;
    },
    {} as Record<string, number>,
  );
  return obj;
};
