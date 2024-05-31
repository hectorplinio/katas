export interface KeyValueObject {
  category: string;
  item: string;
}

const initialObject: KeyValueObject[] = [
  { category: 'fruit', item: 'apple' },
  { category: 'fruit', item: 'banana' },
  { category: 'vegetable', item: 'carrot' },
  { category: 'vegetable', item: 'broccoli' },
  { category: 'fruit', item: 'orange' },
  { category: 'fruit', item: 'banana' },
];

export const convertToGroupedObject = (
  inputParams: KeyValueObject[] = initialObject,
): Record<string, Array<string>> => {
  const obj = inputParams.reduce(
    (acc, { category, item }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].includes(item) ? acc : acc[category].push(item);
      return acc;
    },
    {} as Record<string, Array<string>>,
  );
  return obj;
};
