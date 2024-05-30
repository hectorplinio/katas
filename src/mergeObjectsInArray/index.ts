const initialObject: Array<Record<string, string | number>> = [
  { name: 'John', surname: 'Doe' },
  { age: 21, birth: '22/01/2000' },
  { phone: '123456789', country: 'Spain' },
];

export const mergeObjectsInArray = (
  inputParams: Array<Record<string, string | number>> = initialObject,
): Record<string, string | number> => {
  const finalObject = inputParams.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});

  return finalObject;
};
