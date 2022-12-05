export const filterAtSign = (string: string) => {
  return string
    .split('')
    .filter((l) => l != '@')
    .join('');
};
