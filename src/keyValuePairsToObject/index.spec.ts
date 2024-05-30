import { KeyValuePair, keyValuePairsToObject } from '.';

describe('keyValuePairsToObject', () => {
  it('should create an object from the default key-value pairs', () => {
    const result = keyValuePairsToObject();
    expect(result).toEqual({ name: 'Alice', age: 25, city: 'New York' });
  });

  it('should create an object from given key-value pairs', () => {
    const inputParams: KeyValuePair[] = [
      ['color', 'blue'],
      ['size', 'medium'],
      ['quantity', 10],
    ];
    const result = keyValuePairsToObject(inputParams);
    expect(result).toEqual({ color: 'blue', size: 'medium', quantity: 10 });
  });
});
