import { arrayOfKeyValueObjectsToObject } from '.';

describe('arrayOfKeyValueObjectsToObject', () => {
  it('should create an object from the default array of key-value objects', () => {
    const result = arrayOfKeyValueObjectsToObject();
    expect(result).toEqual({
      '0': 'fresas',
      '1': 'manzanas',
      '2': 'plátanos',
      '3': 'naranjas',
    });
  });

  it('should create an object from given array of key-value objects', () => {
    const inputParams: Record<string, string>[] = [
      { '0': 'zero' },
      { '1': 'one' },
      { '2': 'two' },
    ];
    const result = arrayOfKeyValueObjectsToObject(inputParams);
    expect(result).toEqual({ 0: 'zero', 1: 'one', 2: 'two' });
  });
});
