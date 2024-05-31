const inputString: string = 'A man, a plan, a canal: Panama';

export const isPalindrome = (inputPhrase: string = inputString): boolean => {
  const cleaned = inputPhrase.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
