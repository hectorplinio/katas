type KeyValueObject = Record<string, string>;

const initialObject: KeyValueObject[] = [
  { '0': 'fresas' },
  { '1': 'manzanas' },
  { '2': 'plátanos' },
  { '3': 'naranjas' },
];

export const arrayOfKeyValueObjectsToObject = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, string> => {
  const obj = inputParams.reduce(
    (acc, item) => {
      const key = Object.keys(item)[0];
      acc[key] = item[key];
      return acc;
    },
    {} as Record<string, string>,
  );
  return obj;
};
