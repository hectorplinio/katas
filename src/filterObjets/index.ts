export interface InputParams {
  name: string;
  data: Record<string, string | number>;
}

const initialObject: InputParams[] = [
  { name: 'apple', data: { category: 'fruit', quantity: 1 } },
  { name: 'carrot', data: { category: 'vegetable', quantity: 5 } },
  { name: 'banana', data: { category: 'fruit', quantity: 3 } },
  { name: 'broccoli', data: { category: 'vegetable', quantity: 6 } },
  { name: 'orange', data: { category: 'fruit', quantity: 0 } },
];

export const filterObjects = (
  inputParams: InputParams[] = initialObject,
  filterParam: string,
): InputParams[] => {
  const inputParamsFiltered = inputParams.reduce((acc, object) => {
    const { category, quantity } = object.data;
    if (category === filterParam && (quantity as number) > 0) {
      acc.push(object);
    }
    return acc;
  }, [] as InputParams[]);

  return inputParamsFiltered;
};
