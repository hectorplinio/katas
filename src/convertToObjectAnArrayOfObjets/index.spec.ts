import { convertToObjectAnArrayOfObjets } from '.';

describe('convertToObjectAnArrayOfObjets', () => {
  it('should return a combined object from default array', () => {
    const result = convertToObjectAnArrayOfObjets();
    expect(result).toEqual({
      name: 'John',
      surname: 'Doe',
      age: 21,
      birth: '22/01/2000',
      phone: '123456789',
      country: 'Spain',
    });
  });

  it('should return a combined object from given input array', () => {
    const inputParams: Array<Record<string, string | number>> = [
      { name: 'Alice', surname: 'Smith' },
      { age: 30, birth: '01/01/1990' },
      { phone: '987654321', country: 'USA' },
    ];
    const result = convertToObjectAnArrayOfObjets(inputParams);
    expect(result).toEqual({
      name: 'Alice',
      surname: 'Smith',
      age: 30,
      birth: '01/01/1990',
      phone: '987654321',
      country: 'USA',
    });
  });
});
