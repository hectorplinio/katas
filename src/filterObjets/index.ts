const initialObject: Record<string, string>[] = [
  { name: 'apple', category: 'fruit' },
  { name: 'carrot', category: 'vegetable' },
  { name: 'banana', category: 'fruit' },
  { name: 'broccoli', category: 'vegetable' },
];
export const filterObjets = (
  inputParams: Record<string, string>[] = initialObject,
  filterParam: string,
): Record<string, string>[] => {
  const inputParamsFiltered = inputParams.filter(
    (object) => object.category === filterParam,
  );

  return inputParamsFiltered;
};
