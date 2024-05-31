const inputParam1: string = 'anagram';
const inputParam2: string = 'nagaram';

export const isAnagram = (
  firstInput: string = inputParam1,
  secondInput: string = inputParam2,
): boolean => {
  if (firstInput.length !== secondInput.length) {
    return false;
  }
  const count = new Map<string, number>();
  for (const char of firstInput) {
    count.set(char, (count.get(char) || 0) + 1);
  }
  for (const char of secondInput) {
    if (!count.has(char)) {
      return false;
    }
    count.set(char, count.get(char)! - 1);
    if (count.get(char) === 0) {
      count.delete(char);
    }
  }
  return count.size === 0;
};
